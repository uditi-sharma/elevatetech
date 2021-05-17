// burger dropdown
function changeBurger(x) {
    x.classList.toggle("change");
    var navLinksMobile = document.getElementById("navLinksMobile");
    navLinksMobile.classList.toggle("grid");
}

// description text 
consoleText(["Dubai's First All Female High School Hackathon", "Open to students internationally!", "Join Us On August 7-9!"], 'text', ['rebeccapurple']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}

// countdown
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