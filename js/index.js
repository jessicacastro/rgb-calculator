window.addEventListener("load", changeColor);

function changeColor() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;

  let redValue = document.getElementById("red-value");
  let greenValue = document.getElementById("green-value");
  let blueValue = document.getElementById("blue-value");

  let rgb = document.getElementById("rgb");

  let colorPicked = "rgb(" + red + "," + green + "," + blue + ")";

  let divPicked = document.getElementById("color-picked");
  divPicked.style.background = colorPicked;

  redValue.innerHTML = red;
  greenValue.innerHTML = green;
  blueValue.innerHTML = blue;
  rgb.innerHTML = colorPicked;
}

document.getElementById('red').addEventListener("input", changeColor);
document.getElementById('green').addEventListener("input", changeColor);
document.getElementById('blue').addEventListener("input", changeColor);
