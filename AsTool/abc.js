//这里是卡密
    var cardCodes = [
//单位数的到期时间前面要加0
//（如到期时间是：2024年2月9日上午或凌晨 4点6分7秒 = 2024-02-09T04:06:07）

//年-月-日-T时:分:秒
//—————————👇储存卡密位置—————————
{ code: 'TrollJio', expirationDate: new Date('2099-09-17T12:09:39').getTime() },
{ code: 'Trolljio', expirationDate: new Date('2099-09-17T12:09:39').getTime() },
{ code: ' trolljio', expirationDate: new Date('2099-09-17T12:09:39').getTime() },
        
//——————————————————————————————
//👇下面不用动，当结尾用的。卡密添加在上面就行。
{ code: '1', expirationDate: new Date('2022-02-02T02:22:22').getTime() }
];
      function getExpirationDate() {
        return new Date().setHours(new Date().getHours() + 24); //24小时制计算
      }

      function verifyCard() {
        var enteredCardCode = document.getElementById('cardCode').value;
        var currentDateTime = new Date();

        var card = cardCodes.find(card => card.code === enteredCardCode);

        if (card) {
          if (currentDateTime < new Date(card.expirationDate)) {
            var expirationDate = new Date(card.expirationDate);
            var months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            var expirationMonth = months[expirationDate.getMonth()]; // 获取月份的文字表示
            var expirationDay = expirationDate.getDate(); // 获取日期
            var expirationHours = expirationDate.getHours(); // 获取小时
            var expirationMinutes = expirationDate.getMinutes(); // 获取分钟
            var formattedExpirationDay = ("0" + expirationDay).slice(-2); // 格式化日期为两位数
            var formattedExpirationHours = ("0" + expirationHours).slice(-2); // 格式化小时为两位数
            var formattedExpirationMinutes = ("0" + expirationMinutes).slice(-2); // 格式化分钟为两位数
            document.getElementById('result').innerText = '卡密验证成功！该卡密的到期时间是：' + expirationMonth + formattedExpirationDay + '日' + formattedExpirationHours + '时' + formattedExpirationMinutes + '分';
            setInterval(function() {
              window.location.replace('https://mlgm66.github.io/AsTool/AsTool.html');
            }, 2000); // 卡密验证成功加载脚本（毫秒计算）
          } else {
            document.getElementById('result').innerText = '卡密已过期';
          }
        } else {
          document.getElementById('result').innerText = '设备udid未绑定此卡密';
        }
      }

      function copyToClipboard(text) {
        var input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('链接已复制到剪贴板：' + text);
      }
