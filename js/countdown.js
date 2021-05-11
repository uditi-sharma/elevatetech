const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

countdown = new Date("Aug 7, 2021 11:00:00").getTime();

x = setInterval(function () {
    var now = new Date().getTime();
    var time = countdown - now;

    document.getElementById("countdown-days").innerText = Math.floor(time / (day));
    document.getElementById("countdown-hours").innerText = Math.floor((time % (day)) / (hour));
    document.getElementById("countdown-minutes").innerText = Math.floor((time % (hour)) / (minute));
    document.getElementById("countdown-seconds").innerText = Math.floor((time % (minute)) / second);
}, 1000);