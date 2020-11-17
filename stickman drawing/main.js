//stickman draweing 

let cnv= document.getElementById("my-canvas")
let ctx = cnv.getContext("2d")
cnv.width = 800
cnv.height = 600

function drawStickman(x, y, color) {
    stroke(color)
    circle(x + 20, y + 20, 20, "stroke") //head
    line(x + 20, y + 40, x + 20, y + 80) //body
    line(x, y + 70, x + 20, y + 50) // left arm 
    line(x + 40, y + 70, x + 20, y + 50); // Right Arm
    line(x, y + 110, x + 20, y + 80); // Left Leg
    line(x + 40, y + 110, x + 20, y + 80); // Right Leg

}

drawStickman(50, 100, "red")