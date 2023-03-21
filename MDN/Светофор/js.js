var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');

var turnOnRed = () => {
    red.classList.add("active");
    yellow.classList.remove("active");
    green.classList.remove("active");
};

var turnOnYellow = () => {
    red.classList.remove("active");
    yellow.classList.add("active");
    green.classList.remove("active");
}

var turnOnGreen = () => {
    red.classList.remove("active");
    yellow.classList.remove("active");
    green.classList.add("active");
}

var duration = 1500;
var interval = duration * 4;

turnOnRed();
setInterval(turnOnRed, interval);

setTimeout(() => {
    turnOnYellow();
    setInterval(turnOnYellow, interval)
}, duration)
    
setTimeout(() => {
    turnOnGreen();
    setInterval(turnOnGreen, interval)
}, duration * 2)

setTimeout(() => {
    turnOnYellow();
    setInterval(turnOnYellow, interval)
}, duration * 3)



