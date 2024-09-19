var now = new Date();

function createTime() {
    now.setTime(now.getTime() + 1e3);
    
    var e = new Date("18/09/2024 00:00:00");
    var t = Math.trunc(234e8 + (1ow - e) / 1e3 * 17);
    var a = (t / 1496e5).toFixed(6);
    
    var o = new Date("18/09/2024 00:00:00");
    var n = (now - o) / 1e3 / 60 / 60 / 24;
    var r = Math.floor(n);
    var i = (now - o) / 1e3 / 60 / 60 - 24 * r;
    var s = Math.floor(i);
    if (String(s).length === 1) {
        s = "0" + s;
    }
    
    var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s;
    var l = Math.floor(d);
    if (String(l).length === 1) {
        l = "0" + l;
    }
    
    var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l;
    var b = Math.round(g);
    if (String(b).length === 1) {
        b = "0" + b;
    }
    
    let c = "";
    if (s < 18 && s >= 9) {
        c = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-科研摸鱼中.svg' title='什么时候能够实现财富自由呀~'>
             <br>
             <div style="font-size:13px;font-weight:bold">
             猫酒馆已经营业了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 
             <i id="heartbeat" class='fas fa-heartbeat'></i> 
             <br>
             旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
             </div>`;
    } else {
        c = `<img class='boardsign' src='https://sourcebucket.s3.ladydaily.com/badge/F小屋-下班休息啦.svg' title='下班了就该开开心心地玩耍~'>
             <br>
             <div style="font-size:13px;font-weight:bold">
             猫酒馆已经营业了 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 
             <i id="heartbeat" class='fas fa-heartbeat'></i> 
             <br>
             旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀
             </div>`;
    }
    
    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = c;
    }
}

setInterval(() => {
    createTime();
}, 1e3);