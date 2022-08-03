// Set scrollable to false
document.body.style.overflow = "hidden";

// Set up the canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
ctx.canvas.style.width = '100%';
ctx.canvas.style.height = '100%';

// Rain effect
var rain = [];

var rainInterval = setInterval(function() {
    rain.push({
    x: Math.random() * ctx.canvas.width,
    y: Math.random() * ctx.canvas.height,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.5 + 0.5
});
}, 100);

var rainInterval = setInterval(function() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (var i = 0; i < rain.length; i++) {
    rain[i].y += rain[i].speed;
    ctx.fillStyle = '#646f87';
    ctx.fillRect(rain[i].x, rain[i].y, rain[i].size, rain[i].size);
    if (rain[i].y > ctx.canvas.height) {
        rain.splice(i, 1);
    }
}
}, 1 / ctx.canvas.width);

// Moving title for the extra fancies
var title = document.getElementById("title");
var titleText = title.innerHTML;
var titleLength = titleText.length;
var titleIndex = 0;
var titleInterval = setInterval(function() {
    title.innerHTML = titleText.substring(0, titleIndex);
    titleIndex++;
    if (titleIndex > titleLength) {
        clearInterval(titleInterval);
    }
}, 200);

// Set up the title canvas
var titleCanvas = document.getElementById('title-canvas');
var titleCtx = titleCanvas.getContext('2d');
titleCtx.canvas.width = window.innerWidth;
titleCtx.canvas.height = window.innerHeight;
titleCtx.canvas.style.width = '100%';
titleCtx.canvas.style.height = '100%';

// Animated text on the title canvas
var text = "haejeg";
var textLength = text.length;
var textIndex = 0;
var textCompletion = false;
var textInterval = setInterval(function() {
    titleCtx.clearRect(0, 0, titleCtx.canvas.width, titleCtx.canvas.height);
    titleCtx.font = "5em Arial";
    titleCtx.fillStyle = "#e3c7c5";
    titleCtx.fillText(text.substring(0, textIndex), titleCtx.canvas.width/2 - titleCtx.measureText(text.substring(0, textIndex)).width/2, window.innerHeight/2);
    textIndex++;
    if (textIndex > textLength) {
        textCompletion = true;
        clearInterval(textInterval);
    }
}, 200);
