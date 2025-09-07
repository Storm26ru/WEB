// JavaScript source code
function Power() {
    let base = document.getElementById("base").value;
    let exponent = document.getElementById("exponent").value;
    document.getElementById("power").innerHTML = base ** exponent;
}
document.addEventListener("mousemove", GetMouseCoords);
function GetMouseCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
}
function SwitchBackground() {
    let switchBackground = document.getElementById("switch-background");
    let delay = document.getElementById('delay').value;
    document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
    document.getElementById('switch-background').style.transition = `background-image ${delay}s`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}
function UploadPhoto(input)
{
    let file = input.files[0];
    document.getElementById('photo').src = URL.createObjectURL(file);
}