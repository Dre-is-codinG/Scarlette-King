const den = document.getElementById("den");
const head = den.getContext("2d");
const spine = den.getContext("2d");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

den.width = windowWidth * 0.85;
den.height = windowHeight * 0.85;
var radius = 10;
var gapBetween = 40


den.addEventListener("mousemove", (e) => {
    let distance = Math.sin(Date.now() * 0.001) * 50;
    let start = { x: e.offsetX + gapBetween, y: e.offsetY + gapBetween };
    
    // head
    setTimeout(() => {
        head.clearRect(0, 0, den.width, den.height);
        head.beginPath();
        head.arc(start.x, start.y, radius, 0, Math.PI * 2);
        head.fillStyle = "rgb(22, 23, 24)";
        head.fill();
        head.strokeStyle = "white";
        head.stroke();
        spine.beginPath();
        spine.moveTo(start.x, start.y);
        spine.bezierCurveTo(
            e.offsetX + 150 + distance,
            e.offsetY + 50,
            e.offsetX + 200 - distance,
            e.offsetY + 150,
            e.offsetX + 250,
            e.offsetY + 100
        );
        spine.strokeStyle = "white";
        spine.stroke();
    }, 1000);
    
})