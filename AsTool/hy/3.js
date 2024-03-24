/*h5的官方js，我直接复制过来了*/

var h5gg_jquery_stub;

if(typeof $ == 'undefined')
    document.write("<script src=\"https://mlgm66.github.io/AsTool/jquery.min.js\"><\/script>");

//根据选择的有符号/无符号数确定搜索类型
function h5ggType(type)
{
    if($("input:radio[name=numtype]:checked").val()=="unsigned") {
        switch(type) {
            case "I8":
                return "U8";
            case "I16":
                return "U16";
            case "I32":
                return "U32";
            case "I64":
                return "U64";
        }
    }
    
    return type;
}

    
//页面显示完毕事件
document.addEventListener("DOMContentLoaded", function(){

    if(typeof $ == 'undefined') {
        alert("jquery load failed!");
        return;
    }

    /*禁止文本选择和拖动*/
    document.body.onselectstart = document.body.ondrag = function(){
        return false;
    }
    //文本框等输入完毕后页面自动滚动到顶部
    $("input").blur(function(){
        window.scroll(0,0);
    });
    
    //激活webkit的button:active
    document.body.addEventListener('touchstart', function () {});
    
    //绑定菜单点击切换子页面
    $("div.menubox").unbind('click').click(function(){
        $("div.menubox").removeClass("current");
        $("div.menuview").removeClass("current");
        $(this).addClass("current");
        
        var menuid = $(this).attr("menu");
        $("div#"+menuid).addClass("current");
    });
    
    $("#datavalue").focus(function(){
        var input = $(this);
        input.attr("type","number");
        setTimeout(function(){
            input.attr("type","text");
        }, 500);
    });
    
    
    $("#crossproc").click(function() {
        $("#popup_proclist").show();
        $("#maskview").show();
    });
        
    if(typeof h5gg!='undefined')
    {
        
        $("#version").text(h5gg_internel_version);
        
        //清除设计演示的结果列表
        onClickClearResults();
    
        //设置标题栏区域可拖动悬浮窗
        setWindowDrag(0, 0, 400, 80);
        
        //布局调整函数
        setLayoutAction(function(w,h) {
            var width = 1000; var height = 1000; //默认尺寸
            if(w<h) {
                height = 1000; //竖屏模式加大显示高度
            }
            width = Math.min(width, w); //适配iPad浮窗, 最大宽度不超出
            height = Math.min(height, h); //适配老设备, 最大高度不超出
            var x = (w-width)/2;
            var y = (h-height)/2;
            if(w<h) {
                y = Math.max(20, y);
                height = Math.min(height, h-y);
            }
            setWindowRect(x,y,width,height);
        });

        var checkprocs = function()
        {
            var procs = h5gg.getProcList();
            if(procs)  //不为空(null)说明是具有跨进程权限
            {
                refreshProcList(procs);
                $("#crossproc").show();
                $("#closeMenu").hide();
                
                if(!$("#procname").attr('pid')) {
                    $("#popup_proclist").show();
                    $("#maskview").show();
                    $("#procname").text('');
                }
                
                setInterval(function(){
                    if($("#popup_proclist").is(":visible"))
                        refreshProcList(h5gg.getProcList());

                    if($("#procname").attr('pid'))
                    {
                        var procs = h5gg.getProcList();
                        var alive = false;
                        for(var i=0; i<procs.length; i++) {
                            if(procs[i].pid == $("#procname").attr('pid')) {
                                alive=true;
                                break;
                            }
                        }
                        
                        if(!alive) {
                            alert("Target process terminated\n\nPlease click on the title bar to select a new target");
                            $("#procname").removeAttr('pid');
                            $("#procname").text('');
                        }
                    }
                    
                }, 1500);
                
            } else  {
                $("#crossproc").hide();
            }
            
        }; //end of checkprocs
        
        checkprocs();
        //setInterval(checkprocs, 1500);
    
    } //end of h5gg check
    
    //点击结果列表里面的地址时弹出修改窗口, 要在listdiv刷新html之后绑定
    $("table#resultList").on('click','tr', function()
    {
        $("table#resultList tr").removeClass("hilight");
        $(this).addClass("hilight");
        
        var address = $(this).attr("address");
        var datatype = $(this).attr("datatype");
        var datavalue = $(this).attr("datavalue");
        
        //读取该地址最新数据
        if(typeof h5gg!='undefined')
            datavalue = h5gg.getValue(address, h5ggType(datatype));
        
        showPopView("&nbsp;&nbsp;Edit&nbsp;&nbsp;", function(type, value){
            
            if(!h5gg.setValue(address, value, h5ggType(type))) {
                alert("The modification failed, the address may be invalid!");
            }
            
            onClickRefreshResults();
            
        }, datatype, datavalue);
    });
});

function refreshProcList(procs)
{
    $("#proctable button").remove();
    
    for(var i=0; i<procs.length; i++) {
        var proc = procs[i];
        var btn = $("<button>"+proc.name+"</button>");
        btn.attr("pid", proc.pid);
        btn.click(function()
        {
            if(!h5gg.setTargetProc($(this).attr('pid'))) {
                alert("Cannot Select Target!");
                return;
            }
            
            onClickClearResults();
            
            $("#procname").attr('pid', $(this).attr('pid'));
            $("#procname").text($(this).text());
            $("#popup_proclist").hide();
            $("#maskview").hide();
        });
        
        $("#proctable").append(btn);
    }
}

function refreshLocalSrcipts()
{
    $("table#localjslist tr").remove();
    
    var jsfiles = h5gg.getLocalScripts();

    setTimeout(function(){
        
        if(jsfiles.length==0) {
            $("table#localjslist tbody").append("<tr><td colspan=2>Searching App's Documents Directory...<br/>Searching .app Bundle Directory...<br/>No (*.js) or (*.html) files found!</td></td>");
        }
        
        $("table#localjslist tbody").append('<tr><td style="border-right-style:none; color:blue">Browser on File App</td><td style="border-left-style:none;width:45px"><button onclick="h5gg.pickScriptFile(onClickLoadScript)">Load</button></td></tr>');
        
        for(var i=0; i<jsfiles.length; i++) {
            var row = '<tr><td style="border-right-style:none;font-weight:bold;color:green">'+jsfiles[i].name+'</td><td style="border-left-style:none;width:45px"><button onclick="onClickLoadScript(\''+jsfiles[i].path+'\')">Load</button></td></tr>';
            $("table#localjslist tbody").append(row);
        }
    }, 300);
}

function onShowLoadScript(show)
{
    if(show) {
        $("#maskview").show();
        $("#popup_loadscripts").show();
        
        if(typeof h5gg!='undefined') refreshLocalSrcipts();
    } else {
        $("#maskview").hide();
        $("#popup_loadscripts").hide();
    }
}

function onClickLoadScript(url, type)
{
    if(!url) return;
    
    if(/^\w+\:/.test(url)==false) url = "file://"+url;
    
    try{
        url = new URL(url);
        url.searchParams.append("_", Math.random());
    }catch(e){
        alert("invliad URL!");
        return;
    }
    
    $("#popup_progress").show();
    $("#maskview_script").show();
    
    if(type=='h5' || (!type&&!/\.js$/.test(url.pathname))) {
        window.location = url.href;
        return;
    }
    
    var script = document.createElement("script");

    script.type = "text/javascript";
    
    script.onload = function () {
      alert("JS Run Complete!");
        $("#popup_progress").hide();
        $("#maskview_script").hide();
    };
    
    script.onerror = function () {
        alert("Load Error!\nURL Invalid or Network Exception!");
        $("#popup_progress").hide();
        $("#maskview_script").hide();
    };

    script.src = url.href;
    document.body.appendChild(script);
}


//弹出搜索或修改窗口
function showPopView(name, action, type, value)
{
    $("#maskview").show();
    $("#popup_search_edit").show();
    $("#popup_search_edit").find("B#titleBar").html(name);
    $("#popup_search_edit").find("button#action").html(name);
    
    if(type) {
        $("table#datatype td").each(function(){
            if($(this).text()==type)
                $(this).addClass("selected");
            else
                $(this).removeClass("selected");
        });
    }
    
    if(value) {
        $("input#datavalue").val(value);
    }
    
    $("input#datavalue").focus();
    
    $("#popup_search_edit").find("button#action").unbind("click").click(function(){
        var type = $("table#datatype td.selected").text();
        var value = $("input#datavalue").val();
        
        $("#popup_search_edit").hide();
        $("#popup_progress").show();
        
        setTimeout(function() {
            
            action(type, value);
            
            $("#popup_progress").hide();
            $("#maskview").hide();
        }, 200);
        
    });
    
    $("#popup_search_edit").find("button#cancel").unbind("click").click(function(){
        $("#maskview").hide();
        $("#popup_search_edit").hide();
    });
    
    $("table#datatype td").unbind("click").click(function(){
        $("table#datatype td").removeClass("selected");
        $(this).addClass("selected");
        $("input#datavalue").focus();
    });
}

function onClickClearResults()
{
    $("input#datavalue").val("");
    $("#results_count").hide();
    $("table#resultList tr").remove();
    $("table#resultList").attr("currentCount", 0);
    if(typeof h5gg!='undefined') h5gg.clearResults();
}

function loadResults(from, count)
{
    var maxCount = count;
    var skipCount = from;
    
    var results = h5gg.getResults(maxCount, skipCount);
    
    //alert("count"+count+":"+results.length+":"+results[0].address);
    
    for(var i=0; i<results.length; i++)
    {
        if(results[i].type=='F32' || results[i].type=='F64')
            results[i].value = '('+results[i].value+')';
        var row = '<tr address="'+results[i].address+'" datatype="'+results[i].type+'" datavalue="'+results[i].value+'"><td>'+(from+i+1)+'. '+results[i].address+'<br/><font>'+results[i].value+'</font></td></tr>';
        
        $("table#resultList tbody").append(row);
    }
}

function onClickRefreshResults(clean)
{
   $("table#resultList tr").remove();
   
   if(clean) {
       $("#listdiv").get(0).scroll(0,0);
       $("table#resultList").attr("currentCount", 0);
   }

    var count = h5gg.getResultsCount();
    $("#results_count").text("Results Count: "+count);
    $("#results_count").show();
    
    var currentCount = Number($("table#resultList").attr("currentCount"));
    if(isNaN(currentCount) || currentCount==0) {
        currentCount = 100;
        $("table#resultList").attr("currentCount", 100);
    }
    
    loadResults(0, currentCount);
}

function loadMoreResults() {
    console.log("load more data!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+Math.random());
    
    //当前显示数量
    var currentCount = Number($("table#resultList").attr("currentCount"));
    
    //每次增加显示100条
    $("table#resultList").attr("currentCount", currentCount+100);
    
    loadResults(currentCount, 100);
}

function showMoreResults(div)
{
    var lh = div.scrollHeight - div.scrollTop;
    console.log(div.clientHeight+","+div.offsetHeight +" : " +div.scrollTop+","+div.scrollHeight + " : " + lh);
    
    if(lh <= div.clientHeight) {
        console.log("trigger bottom!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        loadMoreResults();
    }
}

function onClickEditAll()
{

    
    showPopView("EditAll", function(type, value){

        var count = h5gg.editAll(value, h5ggType(type));
        
        onClickRefreshResults();
        
        alert("Success to modify count: "+count);
    });
}

function onClickSearchNumber()
{
    showPopView("Search Number", function(type, value) {
        
        h5gg.setFloatTolerance($("#float_tolerance").val());
        
        var memoryFrom = $("input#range_min").val();
        var memoryTo = $("input#range_max").val();
        h5gg.searchNumber(value, h5ggType(type), memoryFrom, memoryTo);
        
        onClickRefreshResults(true);
    });
}

function onClickSearchNearby()
{
    
    showPopView("Nearby Search", function(type, value){
        
        h5gg.setFloatTolerance($("#float_tolerance").val());
        
        var nearbyRange = $("input#nearby_range").val();
        h5gg.searchNearby(value, h5ggType(type), nearbyRange);
        
        onClickRefreshResults(true);
    });
}
    
function onClickMakeTweak()
{
    alert("Make your custom dylib\n\nStep 1: Select a picture file for float button");
    h5gg.pickScriptFile(function(icon){
        
        alert("Step 2: Select a html file that needs to load automatically");
        
        h5gg.pickScriptFile(function(html) {
            
            alert(h5gg.makeTweak(icon, html));
            
        }, ["public.html"]);
        
    }, ["public.image"]);
}
