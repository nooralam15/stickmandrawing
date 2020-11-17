// basic fucntions 

function stroke(color) {
    ctx.strokeStyle = color
}

// function for drawign the lines
function line(x1, y1, x2, y2 ) {  //function wont work unless you invoke that funcion or call it
    console.log(x1, y1, x2, y2 )
    ctx.beginPath();
    ctx.moveTo(x1, y1); //endpoint 1 
    ctx.lineTo(x2, y2); //endpoint 2
    ctx.stroke()

}

//Draw a stroke or fill circle with center of (x,y0 and radius of r)
function circle ( x, y, r, mode) {
    ctx.beginPath()
    ctx.arc (x, y, r, 0, 2 * Math.PI)
    if (mode == "fill") {
        ctx.fill();
    }
    else if (mode == "stroke") {
        ctx.stroke();
    }

}