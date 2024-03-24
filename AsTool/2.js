//对应卡密部分
function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    const screenWidth = window.screen.width;

    if (screenWidth < 768 || userAgent.includes('mobile')) {
        return true; // 移动设备
    } else {
        return true; // 非移动设备
    }
}
//检测是否从卡密文件转跳的（部分）
sessionStorage.setItem('referrer', 'index.html');

// 第一次检测移动设备
if (!isMobile()) {
    window.location.replace('https://www.baidu.com');
} else {
    // 第二次检测，如果不是移动设备，则跳转到百度网站
    var userAgent = navigator.userAgent.toLowerCase();
    var isMobile = /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(userAgent);
    var isIPad = /ipad/i.test(userAgent);

    if (!isMobile && !isIPad) {
        alert("禁止在电脑上访问");
        window.location.href = "https://www.baidu.com"; // 转跳到百度网站
    } else {
        // 处理第二次移动设备访问的逻辑
    }
}
