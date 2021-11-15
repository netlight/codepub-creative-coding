/*
 * This example is described in more detail than the rest in this folder.
 * For more information about riso, see: 
 * - https://github.com/antiboredom/p5.riso/blob/master/tutorials/getting-started.md
 * - https://discourse.processing.org/t/a-p5-js-cheat-sheet-for-beginners/8236
 * - https://www.codecademy.com/learn/learn-p5js/modules/p5js-animation/cheatsheet 
 */


function setup(){
	
	let width = 1100;                      // Setting width of canvas
	let height = width * 1.41;             // Setting height of canvas
	
	createCanvas(width, height);           // Create the canvas and set the size you want to work with
	pixelDensity(1);                       // Making sure the canvas size is fixed
	background(250);                       //set the on screen background to be between 0 (black) and 255 (white)
	
	objectsInCircle("ellipse", 6, 75, "red");
	objectsInCircle("ellipse", 6, 350, "orange");
	//objectsInCircle("rect", 6, 350, "green");

	drawRiso();                            // Draw the object on the canvas
	noLoop();
}

function objectsInCircle(type, noOfObjects, radius, color) {
	for(i = 0; i < noOfObjects; i++) {
		let currentAngle = (i + 1) * (Math.PI * 2 / noOfObjects);
		console.log("Angle: " + currentAngle + " Coord: ", Math.cos(currentAngle) + ", " + Math.sin(currentAngle));

		shape = new Riso(color);    // Create new  riso object
		shape.stroke(255);          // Set the stroke opacity
		shape.strokeWeight(5);      // Set the thickness of the stroke
		switch(type) {
			case "rect":
				shape.rect(width/2 + radius*Math.cos(currentAngle), height/2 + radius*Math.sin(currentAngle), 150, 150); // Set ellipse as object type
				break;
			case "ellipse":
			default:
				shape.ellipse(width/2 + radius*Math.cos(currentAngle), height/2 + radius*Math.sin(currentAngle), 150, 150); // Set rectangle as object type
				break;
		}
	}
}