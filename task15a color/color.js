const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const red = getRandomNumber(0,255);
    const green = getRandomNumber(0,255);
    const blue = getRandomNumber(0,255);

    const rgbColor = `rgb(${red},${green},${blue})`;

    color.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor; 
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}