var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var color3 = document.querySelector(".color3");

// body.style.background = "red"  利用DOM更換背景顏色

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value
    + ", " 
    + color2.value
    + ")";

    css.textContent = body.style.background;
}

function randomColor() {
    var colorNember = (Math.floor(Math.random()*256))
    if (colorNember < 16) {
        colorNember = 16;
    } 
    return colorNember;
}

function setRandomColor() {
	var red1 = (randomColor()).toString(16);
	var green1 = (randomColor()).toString(16);
	var blue1 = (randomColor()).toString(16);
    // console.log(red1,green1,blue1);
	color1.value = 
	"#" 
    + red1
    + green1
    + blue1

	var red2 = (randomColor()).toString(16);
	var green2 = (randomColor()).toString(16);
	var blue2 = (randomColor()).toString(16);
    // console.log(red2,green2,blue2);
	color2.value = 
	"#" 
    + red2
    + green2
    + blue2

	setGradient();
}

color1.addEventListener("input" , setGradient);

color2.addEventListener("input" , setGradient);

color3.addEventListener("click" , setRandomColor);



	
    




