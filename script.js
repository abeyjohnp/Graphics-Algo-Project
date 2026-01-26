//alert("JS is connected!"); //to check connected or not.
const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d') 
/* this getContext here
Creates a CanvasRenderingContext2D 
object representing a two-dimensional rendering context.
*/

const drawBtn = document.getElementById('drawBtn');
const clearBtn = document.getElementById('clearBtn');

function drawPixel(x,y,color="black")
{
    ctx.fillStyle = color;
    ctx.fillRect(Math.round(x),Math.round(y),5,5) //1,1 sets width and height of rect to 1 unit
}

clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
}
);

//()=> means that everything inside the {} wll run only after the button is clicked.

drawBtn.addEventListener('click', () => {
    //Get values and FORCE them to be numbers using Number()
    const x1 = Number(document.getElementById('x1').value);
    const y1 = Number(document.getElementById('y1').value);
    const x2 = Number(document.getElementById('x2').value);
    const y2 = Number(document.getElementById('y2').value);


    //try to draw a line
    for (let i = x1; i <= x2; i++) {
        drawPixel(i, y1, "red");
    }
});
