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
}, 100 / 60);
