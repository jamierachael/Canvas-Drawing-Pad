// Jamie Morris Assignment 3 4/27/19 

// Document declaration 
var canvas = document.getElementById('myCanvas');
// Context
var ctx = canvas.getContext('2d');

// Canvas Width Adjustment
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Painting function
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);

// Painting height and width 
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));
//Painting Canvas Definitions complete

//Mouse configuration 
var mouse = { x: 0, y: 0 };

// Default color 
var paintColor = 0;
var brushThick = 100;

// Canvas configuration starts

// Mouse Events - mousemove 
canvas.addEventListener('mousemove', function (e) {
	mouse.x = e.pageX - this.offsetLeft;
	mouse.y = e.pageY - this.offsetTop;
	showCoords();
}, false);

// Mouse coordinates

function showCoords() {
	var x = event.clientX;
	var y = event.clientY;
	var coords = "X: " + x + ", Y: " + y;
	document.getElementById("demo7").innerHTML = coords;
	document.getElementById("demo8").innerHTML = coords;
}

// Line Properties
// ctx.lineWidth = brushThick;
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.strokeStyle = paintColor;

// Event Listeners for choosing the tool to change color, line thickness and selecting the eraser. 

sld = document.getElementById("slidecontainer");
sld.addEventListener("change", myfunc);
favc = document.getElementById("fillcontainer");
favc.addEventListener("change", myfunc2);
ers = document.getElementById("eraser");
ers.addEventListener("click", myfunc3);

// Function to change from color picker from slider
function myfunc() {
	changeBrush();
	val_col = getsliderval();
	ctx.strokeStyle = val_col;// 
	ctx.globalAlpha = Ax;
	ctx.lineWidth = lthick;
	ctx2.fillStyle = val_col;
	ctx2.fill();
}
// Function for fill tool
function myfunc2() {
	changeBrush();
	ctx.strokeStyle = paintColor;
	ctx.lineWidth = brushThick;
}
// Function for eraser
function myfunc3() {
	favc.removeEventListener('mousemove', myfunc2, false);
	sld.removeEventListener('mousemove', myfunc, false);
	changeBrush();
	ctx.strokeStyle = "#ffffff";
}

// Mouse Events - mousedown

canvas.addEventListener('mousedown', function (e) {
	ctx.beginPath();
	ctx.moveTo(mouse.x, mouse.y);
	// Former function:
	//	changeBrush();
	//    ctx.strokeStyle = paintColor;
	brushThick = document.getElementById("lineThick").value;
	//       ctx.lineWidth = brushThick;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	canvas.addEventListener('mousemove', onPaint, false);
	//   canvas.addEventListener('mousemove', onPaint, false);
}, false);

//	RGBA Values from slider

function getsliderval() {
	var slider = document.getElementById("redRange");
	var output = document.getElementById("demo1");
	//var Rx=255; //var Gx=255; //var Bx=0;

	var slider2 = document.getElementById("greenRange");
	var output2 = document.getElementById("demo2");

	var slider3 = document.getElementById("blueRange");
	var output3 = document.getElementById("demo3");

	var slider4 = document.getElementById("alphaRange");
	var output4 = document.getElementById("demo4");

	var slider5 = document.getElementById("lineSlider");
	var output5 = document.getElementById("demo5");

	Rx = slider.value; output.innerHTML = Rx;
	Gx = slider2.value; output2.innerHTML = Gx;
	Bx = slider3.value; output3.innerHTML = Bx;
	tempAx = slider4.value;
	lthick = slider5.value; output5.innerHTML = lthick;

	// Formula for RGBA Values

	Ax = Math.fround(tempAx / 10);
	// output4.innerHTML=Ax;
	pp = "rgba(" + Rx + "," + Gx + "," + Bx + "," + Ax + ")";
	// Testing function: 
	// document.getElementById("demo4").innerHTML=pp;
	return pp;
}
// Color picker selector
function changeBrush() {
	// Former function: 
	// getsliderval();
	document.getElementById("demo6").innerHTML = document.getElementById("favcolor").value;
	//Testing function
	// document.getElementById("demo7").innerHTML = myval;//document.getElementById("favcolor").value;

	paintColor = document.getElementById("favcolor").value;

	//  Testing function:
	//  return paintColor;

}

// Mouse Events - mouseup

canvas.addEventListener('mouseup', function () {
	canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function () {
	ctx.lineTo(mouse.x, mouse.y);
	ctx.stroke();
};
// Canvas configuration ends
// Clear entire canvas "redraw"

document.getElementById("btn").addEventListener("click", redraw);

function redraw() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas

	for (var i = 0; i < clickX.length; i++) {
		ctx.beginPath();
		if (clickDrag[i] && i) {
			ctx.moveTo(clickX[i - 1], clickY[i - 1]);
		} else {
			ctx.moveTo(clickX[i] - 1, clickY[i]);
		}
		ctx.lineTo(clickX[i], clickY[i]);
		ctx.closePath();
		ctx.stroke();
	}

}
// Variables for colors on slider
//       var redRange; // % of original red pixel value
//         var greenRange; // % of original red pixel value// % of original green pixel value
//         var blueRange; // % of original red pixel value// % of original blue pixel value
//         var alphaRange; // alpha amount value
// Change color for line properties

// Test Selection for color picker vs rgba slider
// document.getElementById("favcolor").addEventListener("favcolor", myFunction);

// function myFunction() {
//  var x = document.getElementById("favcolor");
// x.value = x.value.toUpperCase();
// }
// Color swatch for RGBA Values 
var c = document.getElementById("swatch");
var ctx2 = c.getContext("2d");
ctx2.beginPath();
ctx2.rect(20, 20, 150, 100);
//ctx2.fillStyle = "red";
ctx2.fill();






