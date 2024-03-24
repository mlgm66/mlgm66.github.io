   function refreshProcList() { 
       var procs = h5gg.getProcList(); 
       var game; 
       var name; 
       for (var i = 0; i < h5gg.getProcList().length; i++) { 
           if (h5gg.getProcList()[i].name == "ShadowTrackerExt") { 
               game = h5gg.getProcList()[i]; 
               h5gg.setTargetProc(game.pid); 
               name = game.name; 
               h5gg.clearResults(); 
           } 
       } 
       if (name == "ShadowTrackerExt") { /*window.location = "http://xxxxx.com";*/ } else { 
           alert("请先进游戏！"); 
           refreshProcList() 
       } 
   } 
   refreshProcList() 


let baseAddr = Number(h5gg.getRangesList(0)[0].start); 
function WriteByte(addr, hex) {
    if (baseAddr === 0) {
        baseAddr = Number(h5gg.getRangesList(0)[0].start);
    }
    addr = baseAddr + addr;
    for (i = 0; i < hex.length / 2; i++) {
        var item = parseInt(hex.substring(i * 2, i * 2 + 2), 16); 
        h5gg.setValue(addr + i, item, "U8"); 
    }
}

  
function H5GG(){

    window.location.href = "H5GG.html";

}


function chucaoshu() {
h5gg.clearResults();
h5gg.searchNumber('100000000','I32','0x0000000', '0x200000000');
h5gg.editAll('-1', 'I32'); 
}




function yuenanmiaoqieqiang1() {
WriteByte(0x02992b54, 'c0035fd6');}
function yuenanjudian1() {
WriteByte(0x02cfe6ec, 'e003271e');}

function yuenanwuhou1() {
WriteByte(0x02d00d04, 'c0035fd6');}

function yuenanbaise1() {
WriteByte(0x05648d18, '0849b852c9121c8b28593ab8');}
function yuenanlvse1() {
WriteByte(0x05648d88, '0001c33c');}
function yuenanfense1() {
WriteByte(0x05648d88, '0031c63c');}

function yuenanqiangfang1() {
WriteByte(0x02bb66d4, '21208052');}

function yuenanjingfang1() {
WriteByte(0x0551deb4, 'c0035fd6');}


function yuenanchuwu1() {
WriteByte(0x048f6f90, 'c0035fd6');}

function yuenanchucao1() {
WriteByte(0x04ec2318, 'c0035fd6');}


function yuenanmiaoqie1() {
WriteByte(0x02992b54, 'c0035fd6');}


function yuenanjiasu1() {
WriteByte(0x02b8dee4, '2108211e');}



function rihangaoshang1() {
WriteByte(0x03770448, '0890241e');}



function yuenanshunji1() {
WriteByte(0x03556370, '0490241e');}


function yuenanzimiao1() {
WriteByte(0x0294486c, '811c271e');}





function 马可波罗(){
alert('此功能开启后无法开启其他功能否则报错冲突')
h5gg.clearResults(); //清空搜索结果
h5gg.searchNumber('100', 'F32', '0x00000000', '0x200000000');
h5gg.searchNearby('-90', 'F32', '0x20');
h5gg.searchNearby('3266576384', 'I64', '0x20');
h5gg.getValue('3266576384', 'I64');
var count = h5gg.getResultsCount(); //获取搜索到的数据总量
var r = h5gg.getResults(count); //储存数据地址
var weishu = /C18$/; //带结尾的修改（038结尾=830反着输入）
var wxnl=prompt("输入旋转速度越小越快，推荐8");
var startValue = -89; // 起始值
var endValue = 269; // 结束值
var increment = 5; // 递增步长
var interval = wxnl; // 每次修改的时间间隔（单位：毫秒）

var current = startValue; // 当前值

var locker = setInterval(function() {
    console.log("running...");
    for (var i = 0; i < count; i++) {
        h5gg.editAll(current.toString(), 'F32'); // 修改值为当前值，类型为浮点数
    }
    current += increment; // 递增当前值
    if (current > endValue) {
        current = startValue; // 若超过结束值，则重置为起始值
    }
}, interval);


}



function rihanjudian1() {
WriteByte(0x02f172ac, 'e003271e');}

function rihanwuhou1() {
WriteByte(0x02f198c4, 'c0035fd6');}

function rihanbaise1() {
WriteByte(0x058618d8, '0849B852C9121C8B28593AB8');}
function rihanlvse1() {
WriteByte(0x05861948, '0001c33c');}
function rihanfense1() {
WriteByte(0x05861948, '0031c63c');}
function rihanqiangfang1() {
WriteByte(0x02f172ac, '21208052');}

function rihanjingfang1() {
WriteByte(0x05736a74, 'c0035fd6');}


function rihanchuwu1() {
WriteByte(0x04b0fb50, 'c0035fd6');}

function rihanchucao1() {
WriteByte(0x050daed8, 'c0035fd6');}


function rihanjiasu1() {
WriteByte(0x02da6aa4, '2108211e');}









function taiwanjudian1() {
WriteByte(0x02f33eac, 'e003271e');}

function taiwanwuhou1() {
WriteByte(0x02f364c4, 'c0035fd6');}

function taiwanbaise1() {
WriteByte(0x0587e4d8, '0849b852c9121c8b28593ab8');}
function taiwanlvse1() {
WriteByte(0x0587e548, '0001c33c');}
function taiwanfense1() {
WriteByte(0x0587e548, '0031c63c');}
function taiwanqiangfang1() {
WriteByte(0x02debe94, '21208052');}

function taiwanjingfang1() {
WriteByte(0x05753674, 'c0035fd6');}



function taiwanchuwu1() {
WriteByte(0x04b2c750, 'c0035fd6');}

function taiwanchucao1() {
WriteByte(0x050f7ad8, 'c0035fd6');}




function taiwanjiasu1() {
WriteByte(0x02dc36a4, '2108211e');}






function baimunaiyi() {



h5gg.editAll('1400687', 'I32'); 




        
       
}
function huangmunaiyi() {
h5gg.editAll('1405623', 'I32');
}
function lanmunaiyi() {
h5gg.editAll('1406891', 'I32');
}
function jihanzhizhu() {

h5gg.editAll('1406155', 'I32');
}
function jinhuiyanhou() {

h5gg.editAll('1406475', 'I32');





        
       
}


function 黑天(){

h5gg.clearResults(); 
h5gg.searchNumber('0.05', 'F32', '0x100000000', '0x160000000');

var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
for(var i=0; i<count; i++) {
var addr1 = r[i].address;
var weishu = /074$/;
var pd = weishu.test(addr1);
if(pd){
h5gg.setValue(addr1, '9', 'F32');}
if (i == count - 1) { }   
         }}
function tainiudajiang() {


h5gg.editAll('1405944', 'I32');




        
       
}
function jizhouyanhou() {


h5gg.editAll('1405625', 'I32');




        
       
}
function saibohouzi() {


h5gg.editAll('1405927', 'I32');




        
       
}
function saibocike() {



h5gg.editAll('1405996', 'I32');



        
       
}
function jiaomengpangda() {


h5gg.editAll('1406194', 'I32');




        
       
}
function tufu() {


h5gg.editAll('1406438', 'I32');




        
       
}
function baizhousishen() {


h5gg.editAll('1405993', 'I32');




        
       
}
function pangda() {

h5gg.editAll('1405040', 'I32');





        
       
}

function guangjiao(){
h5gg.clearResults();
h5gg.searchNumber('512', 'F32', '0x00000000', '0x200000000');              
h5gg.searchNearby('6500', 'F32','0x100');
h5gg.searchNumber('512', 'F32', '0x00000000', '0x200000000');
h5gg.searchNearby('80~90', 'F32','0x2');
h5gg.searchNumber('80~90', 'F32', '0x00000000', '0x200000000');
var wxnl=prompt("输入1~180内的任何数字推荐120");
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
for(var i=0; i<count; i++) {
var addr1 = r[i].address;
var weishu = /C$/;
var pd = weishu.test(addr1);
if(pd){
h5gg.setValue(addr1, wxnl, 'F32');}
if (i == count - 1) { }   
         }
}



function zuguoren() {



h5gg.editAll('1406439', 'I32');



        
       
}
function shibingnanhai() {


h5gg.editAll('1406437', 'I32');




        
       
}
function bingyi() {


h5gg.editAll('1400782', 'I32');




        
       
}
function shoucepi() {

h5gg.editAll('1406983', 'I32'); 





        
       
}
function xueyuanlingzhu() {


h5gg.editAll('1406872', 'I32');




        
       
}
function guihuang() {

h5gg.editAll('1406638', 'I32');





        
       
}
function manjiyanhou() {

h5gg.editAll('1406475', 'I32');





        
       
}
function manjihaiwang() {

h5gg.editAll('1405983', 'I32');





        
       
}

function shuguangfuluola() {

h5gg.editAll('1407103', 'I32');





        
       
}
function manjifalao() {

h5gg.editAll('1406469', 'I32'); 





        
       
}



function zhenlizhandoufu() {


h5gg.editAll('1406388', 'I32');




        
       
}
function jinkesi() {


h5gg.editAll('1406140', 'I32');




        
       
}

function longyanhaigu() {


h5gg.editAll('1406791', 'I32');




        
       
}

function manjimiyuan() {


h5gg.editAll('1406971', 'I32');




        
       
}

function 感染者1() {


h5gg.editAll('1407194', 'I32');


}

        
       
function 感染者2() {


h5gg.editAll('1407195', 'I32');




        
       
}


function 感染者3() {


h5gg.editAll('1407196', 'I32');




        
       
}
function sese() {
h5gg.clearResults();
h5gg.searchNumber('1400129', 'I32', '0x00000000', '0x200000000');                  
h5gg.editAll('403000',"I32")     
h5gg.clearResults();
h5gg.searchNumber('404000', 'I32', '0x00000000', '0x200000000');                  
h5gg.editAll('1499995',"I32")     
}


function anniu19() {
h5gg.clearResults();
h5gg.searchNumber('1','F32','0x0000000', '0x200000000');
h5gg.searchNearby('0.0001', 'F32', '0x100'); 
h5gg.searchNearby('0.0005', 'F32', '0x100'); 
h5gg.searchNumber('1','F32','0x0000000', '0x200000000');
h5gg.editAll('0.79131', 'F32'); 
}

function anniu20() {
h5gg.clearResults();
h5gg.searchNumber('0.79131','F32','0x0000000', '0x200000000');
h5gg.searchNearby('0.0001', 'F32', '0x100'); 
h5gg.searchNearby('0.0005', 'F32', '0x100'); 
h5gg.searchNumber('0.79131','F32','0x0000000', '0x200000000');
h5gg.editAll('1', 'F32'); 
}


function anniu21() {
h5gg.clearResults();
h5gg.searchNumber('-980','F32','0x0000000', '0x200000000');
h5gg.editAll('-6000.1314', 'F32'); 
}


function anniu31() {
h5gg.clearResults();
h5gg.searchNumber('-6000.1314','F32','0x0000000', '0x200000000');
h5gg.editAll('-980', 'F32'); 
}
function dingdian() {
h5gg.clearResults();
h5gg.searchNumber('-980','F32','0x0000000', '0x200000000');
h5gg.editAll('0', 'F32'); 
}


function 爱s(){

    window.location.href = "As.html";
}
       
function XN(){

    window.location.href = "https://t.me/TrollJio";
}



function H5GG(){

    window.location.href = "H5GG.html";
}



function 赞赏(){

    window.location.href = "https://t.me/TrollJio";
}






function zigaijizhi()
		{
var wxnl=prompt("输入地址例：0x033A3888");
var wxnl1=prompt("输入要改的字节如：C0035FD6");



		WriteByte(parseInt(wxnl), wxnl1);
		}
 function qingchu()
		{
			
h5gg.clearResults();
alert('已清除')
		}

function sousuo()
		{
			
var wxnl=prompt("输入搜索的数值");
var wxnl1=prompt("输入搜索的类型如F32");
h5gg.searchNumber(wxnl, wxnl1, '0x00000000', '0x200000000');

		}










function linjinsousuo()
		{
			
var wxnl=prompt("输入临近的数值默认临近范围0x100");
var wxnl1=prompt("输入搜索的类型如F32");
h5gg.searchNearby(wxnl, wxnl1, '0x100');

		}



function quangai()
		{
			
var wxnl=prompt("输入全改值");
var wxnl1=prompt("输入全改类型如F32");
h5gg.editAll(wxnl,wxnl1);
		}










function 美化教程(){
alert('首先需要在大厅点击大厅初始化1，然后进入局内后点击初始化2，等待提示完成后即可点击想要的服装，衣服必须穿戴系统给的绿条纹上衣，美化衣服可任意切换，去🐻罩不能和美化一起用否则会失效，脱甲生效')}




function bingshuangdajitexiao() {

            h5gg.clearResults();
h5gg.searchNumber('101004', 'I32', '0x0', '0x200000000');
h5gg.searchNumber('101004', 'I32', '0x0', '0x200000000');
h5gg.editAll('1101004046', 'I32');
alert('开启成功');
        //setButtonImage('https://q.qlogo.cn/g?b=qq&nk=382338962&s=100');
       
}



function touxiang() {

//setButtonImage('https://q.qlogo.cn/g?b=qq&nk=382338962&s=100');
        
       
}


function lubaiios() {
        
       
}

function qunliao() {
window.location='https://t.me/TrollJio'
        
       
}








function qiangxiebianda() {
h5gg.clearResults();
var wxnl=prompt("输入手持武器子弹数量");
        
h5gg.searchNumber(wxnl, 'I32', '0x00000000', '0x160000000');    
       
alert('现在去开枪，开完枪之后继续')
         
var wxnl1=prompt("输入变化后的子弹数量");
     
h5gg.searchNumber(wxnl1, 'I32', '0x00000000', '0x160000000');
       
h5gg.searchNearby('1', 'F32', '0x1000');  
     
h5gg.searchNumber('1', 'F32', '0x00000000', '0x160000000');
         
h5gg.editAll('2.5', 'F32');

alert('露白iOS：掏枪生效，丢枪恢复')


}



function jiasuchushihua() {
h5gg.clearResults();
h5gg.searchNumber('670','F32','0x0000000', '0x200000000');
h5gg.editAll('3000', 'F32'); 
h5gg.clearResults();
h5gg.searchNumber('479.5','F32','0x0000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x10'); 
h5gg.searchNumber('1','F32','0x0000000', '0x200000000');
alert('初始化完成')

}





function renwujiasukai() {

h5gg.editAll('2.3', 'F32'); 




}

function renwujiasuguan() {

h5gg.editAll('1', 'F32'); 




}
function 美化初始化2() {

            h5gg.clearResults();
h5gg.searchNumber('403003', 'I32', '0x0', '0x200000000');
alert('开启成功');
        setButtonImage('https://q.qlogo.cn/g?b=qq&nk=382338962&s=100');
}



function 美化初始化1() {

            h5gg.clearResults();
h5gg.searchNumber('403003', 'I32', '0x0', '0x200000000');
h5gg.editAll('403004', 'I32');
alert('开启成功');

        setButtonImage('https://q.qlogo.cn/g?b=qq&nk=382338962&s=100');
       
}
function 一键美化(){
alert('预计20秒，部分性能差的设备可能需要等待更久')
h5gg.clearResults(); 
h5gg.searchNumber('10100100', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101001084', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10100400', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101004062', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10100300', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101003146', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10200200', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1102002043', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10100600', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101006062', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10100800', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101008116', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10100500', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101005052', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10200300', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1102003001', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10200100', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1102001002', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10500100', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1105001020', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10501000', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1105010010', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10210500', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('110215005', 'I32');
h5gg.clearResults(); 
h5gg.searchNumber('10110200', 'I32', '0x0', '0x200000000'); 
h5gg.editAll('1101102017', 'I32');
h5gg.clearResults(); 
alert('完成')
}

function anniu15() {
h5gg.clearResults();
h5gg.searchNumber('46','F32','0x0000000', '0x200000000');
h5gg.searchNearby('10', 'F32', '0x100'); 
h5gg.searchNumber('10','F32','0x0000000', '0x200000000');
h5gg.editAll('100000', 'F32'); 
}


function panpachuanqiang() {
h5gg.clearResults();
h5gg.searchNumber('45','F32','0x0000000', '0x200000000');
h5gg.searchNearby('10', 'F32', '0x5'); 
h5gg.searchNumber('10','F32','0x0000000', '0x200000000');
h5gg.editAll('10000', 'F32'); 
}



function renwufanxiang() {
h5gg.clearResults();
h5gg.searchNumber('100','F32','0x0000000', '0x200000000');
h5gg.searchNearby('-90', 'F32', '0x100'); 
h5gg.searchNumber('-90','F32','0x0000000', '0x200000000');
h5gg.editAll('90', 'F32'); 
}
function weijiasu() {
h5gg.clearResults();
h5gg.searchNumber('479.5','F32','0x0000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x20'); 
h5gg.searchNumber('1','F32','0x0000000', '0x200000000');
h5gg.editAll('5', 'F32'); 
}
function anniu16() { 
h5gg.clearResults();
h5gg.searchNumber('443','F32','0x0000000', '0x200000000');
h5gg.searchNearby('45', 'F32', '0x100'); 
h5gg.searchNumber('45','F32','0x0000000', '0x200000000');
h5gg.editAll('9999', 'F32'); 
}



function guanxing() {
h5gg.clearResults();
h5gg.searchNumber('443','F32','0x0000000', '0x200000000');
h5gg.searchNearby('8192', 'F32', '0x100'); 
h5gg.searchNumber('8192','F32','0x0000000', '0x200000000');
h5gg.editAll('300000', 'F32'); 
}


function anniu14() {
h5gg.clearResults();
h5gg.searchNumber('3000.1314','F32','0x0000000', '0x200000000');
h5gg.searchNearby('45', 'F32', '0x100'); 
h5gg.searchNumber('3000.1314','F32','0x0000000', '0x200000000');
h5gg.editAll('443', 'F32'); 
h5gg.clearResults();
h5gg.searchNumber('479.5','F32','0x0000000', '0x200000000');
h5gg.searchNearby('135', 'F32', '0x100'); 
h5gg.searchNumber('135','F32','0x0000000', '0x200000000');
h5gg.editAll('88', 'F32'); 
alert('完成');
}




function anniu13() {
h5gg.clearResults();
h5gg.searchNumber('443','F32','0x0000000', '0x200000000');
h5gg.searchNearby('45', 'F32', '0x100'); 
h5gg.searchNumber('443','F32','0x0000000', '0x200000000');
h5gg.editAll('3000.1314', 'F32'); 
h5gg.clearResults();
h5gg.searchNumber('479.5','F32','0x0000000', '0x200000000');
h5gg.searchNearby('88', 'F32', '0x100'); 
h5gg.searchNumber('88','F32','0x0000000', '0x200000000');
h5gg.editAll('135.1314', 'F32'); 
alert('完成');
}






function quanqiujudian1() {
WriteByte(0x02d9ee80, 'e003271e');}

function quanqiuwuhou1() {
WriteByte(0x02da1498, 'c0035fd6');}

function quanqiubaise1() {
WriteByte(0x056e94ac, '0849B852C9121C8B28593AB8');}
function quanqiulvse1() {
WriteByte(0x056e951c, '0001c33c');}

function quanqiuqiangfang1() {
WriteByte(0x02c56e68, '21208052');}

function quanqiujingfang1() {
WriteByte(0x055be648, 'c0035fd6');}

function quanqiufense1() {
WriteByte(0x056e951c, '0031C63C');}
function quanqiuchuwu1() {
WriteByte(0x04997724, 'c0035fd6');}

function quanqiuchucao1() {
WriteByte(0x050daed8, 'c0035fd6');}


function quanqiujiasu1() {
WriteByte(0x02c2e678, '2108211E');}


function quanqiushunji1() {
WriteByte(0x035f6b04, '0490241e');}







function 斗宗(){h5gg.searchNumber('479.5', 'F32', '0x100000000', '0x160000000');  
h5gg.searchNearby('1', 'F32','0x10');   
h5gg.searchNumber('1', 'F32', '0x00000000', '0x200000000');
h5gg.editAll('3', 'F32');
h5gg.clearResults();
h5gg.searchNumber('443', 'F32', '0x100000000', '0x160000000');  
h5gg.searchNearby('8192', 'F32','0x100');   
h5gg.searchNumber('8192', 'F32', '0x00000000', '0x200000000');
h5gg.editAll('210000', 'F32');
h5gg.clearResults();
h5gg.searchNumber('0.0001', 'F32', '0x100000000', '0x160000000');  
h5gg.searchNearby('0.0005', 'F32','0x10');   
h5gg.searchNearby('1', 'F32','0x10');         
h5gg.searchNumber('1', 'F32', '0x00000000', '0x200000000');
h5gg.editAll('0.7', 'F32');
h5gg.clearResults();
h5gg.searchNumber('1000', 'F32', '0x100000000', '0x160000000');  
h5gg.searchNearby('64', 'F32','0x10');   
h5gg.searchNearby('1.40129846e-45', 'F32','0x10');         
h5gg.searchNumber('1.40129846e-45', 'F32', '0x00000000', '0x200000000');
h5gg.editAll('99', 'F32');
h5gg.clearResults();
alert('AsTool')}
