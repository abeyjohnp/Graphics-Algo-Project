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
    const algo = document.getElementById('algoSelect').value;

    if (algo === "dda")
    {
        runDDA(x1, y1, x2, y2);
    }

    if (algo === "bresenhamLine")
    {
        runBLA(x1,y1,x2,y2);
    }
});

function runDDA(x1,y1,x2,y2)
{
    let dx=x2-x1;
    let dy=y2-y1;
    let m=dy/dx;
    if (Math.abs(dx)>=Math.abs(dy))
    {
        //this should be m<=1 case as delta x is greater
        let x=x1, y=y1;
        let step=(x1<x2)? 1:-1
        while (x!==x2)
        {
            drawPixel(x,y,"blue");
            x+=step;
            y+=step*m
        }
    }
    else 
    {
        // Case: |m| > 1
        let x = x1, y = y1;
        let step = (y1 < y2) ? 1 : -1;
        while (y !== y2) 
        {
            drawPixel(x, y, "blue");
            x += step * (1/m);
            y += step;
        }
    }
}

function BLA(x1,y1,x2,y2)
{
    let dx=x2-x1;
    let dy=y2-y1;
    let p0=(2*dx)-dy;
    let x=x1,y=y1;
    let pk=p0
    

    while (x!==x2)
    {
        drawPixel(x,y,"blue");
        if ((pk)>=0)
        {
            pk=pk+(2*dy)-(2*dx);
            x+=1
            y+=1
        }
        else
        {
            pk=pk+(2*dx);
            x+=1
        }
    }
    
}
