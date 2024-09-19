var now = new Date();

function createTime() {
    now.setTime(now.getTime() + 1e3);

    var baseDate = new Date("18/09/2024 00:00:00");
    // Corrected the number from '1ow' to '10'
    var t = Math.trunc(234e8 + (10 - baseDate) / 1e3 * 17);
    var a = (t / 1496e5).toFixed(6);

    var referenceDate = new Date("18/09/2024 00:00:00");
    var elapsedSeconds = (now - referenceDate) / 1e3;
    var days = Math.floor(elapsedSeconds / 86400);
    var hours = Math.floor((elapsedSeconds % 86400) / 3600);
    var minutes = Math.floor((elapsedSeconds % 3600) / 60);
    var seconds = elapsedSeconds % 60;

    // Ensure the time is formatted correctly
    var formattedHours = ("0" + hours).slice(-2);
    var formattedMinutes = ("0" + minutes).slice(-2);
    var formattedSeconds = ("0" + seconds).slice(-2);

    let content = "";
    if (hours < 18 && hours >= 9) {
        content = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'>
                   <br>
                   <div style="font-size:13px;font-weight:bold">
                   猫酒馆已经营业了 ${days} 天 ${formattedHours} 小时 ${formattedMinutes} 分 ${formattedSeconds} 秒 
                   <i id="heartbeat" class='fas fa-heartbeat'></i> 
                   <br>
                   旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
                   </div>`;
    } else {
        content = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'>
                   <br>
                   <div style="font-size:13px;font-weight:bold">
                   猫酒馆已经营业了 ${days} 天 ${formattedHours} 小时 ${formattedMinutes} 分 ${formattedSeconds} 秒 
                   <i id="heartbeat" class='fas fa-heartbeat'></i> 
                   <br>
                   旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
                   </div>`;
    }

    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = content;
    }
}


setInterval(() => {
    createTime();
}, 1e3);