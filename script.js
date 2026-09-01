const den = document.getElementById("den");
const head = den.getContext("2d");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

den.width = windowWidth * 0.85;
den.height = windowHeight * 0.85;

head.beginPath();
head.arc(den.width / 2, den.height / 2, 10, 0, Math.PI * 2);
head.fillStyle = "rgb(22, 23, 24)";
head.fill();
head.strokeStyle = "white";
head.stroke();

den.addEventListener("mousemove", (e) => {
    head.clearRect(0, 0, den.width, den.height);
    head.beginPath();
    head.arc(e.offsetX + 20, e.offsetY + 20, 10, 0, Math.PI * 2);
    head.fillStyle = "rgb(22, 23, 24)";
    head.fill();
    head.strokeStyle = "white";
    head.stroke();
})