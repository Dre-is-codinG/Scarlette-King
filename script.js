const den = document.getElementById("den");
const head = den.getContext("2d");
const spine = den.getContext("2d");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

den.width = windowWidth * 0.85;
den.height = windowHeight * 0.85;



den.addEventListener("mousemove", (e) => {
    // head
    head.clearRect(0, 0, den.width, den.height);
    head.beginPath();
    head.arc(e.offsetX + 20, e.offsetY + 20, 10, 0, Math.PI * 2);
    head.fillStyle = "rgb(22, 23, 24)";
    head.fill();
    head.strokeStyle = "white";
    head.stroke();
    // spine
    spine.beginPath();
    spine.moveTo(e.offsetX + 20, e.offsetY + 100);
    spine.bezierCurveTo(e.offsetX + 150, e.offsetY + 50, e.offsetX + 200, e.offsetY + 150, e.offsetX + 250, e.offsetY + 100);
    spine.stroke();
})