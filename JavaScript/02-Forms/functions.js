// JavaScript source code
function Power()
{
    let base = document.getElementById("base").value;
    let exponent = document.getElementById("exponent").value;
    document.getElementById("power").innerHTML = base ** exponent;

}
document.addEventListener("mousemove", GetMouseCoords);
function GetMouseCoords(event)
{
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("mouse").innerHTML = `X=${x}, Y=${y}`;
}

function Duration()
{
    let duration = document.getElementById("duration").value;
    document.documentElement.style.setProperty('--duration', `${duration}s`);
}

function SwitchBackground()
{
    let switchBackground = document.getElementById("switch-background");
    document.body.className == 'dark' ? (document.body.className = 'white', switchBackground.className = 'right')
                                      : (document.body.className = 'dark', switchBackground.className = 'left');
   
   // if (switchBackground.style.backgroundImage == 'url("img/moon1.png")')
   // {
        //switchBackground.style.backgroundImage = 'url("img/sun.png")';
     //   document.body.className = 'white';
   // }
   // else
   // {
        //switchBackground.style.backgroundImage = 'url("img/moon1.png")';
     //   document.body.className ='dark';
   // }
}
