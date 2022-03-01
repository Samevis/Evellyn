function rect(width, height, x, y)  // parametros a funcao
{
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var context = canvas.getContext('2d');
        
        context.fillRect(x, y,width, height); 
        
    }
}
function background(color) 
{ 
    console.log('funcion background ',color) // aparece esrito no console
    var canvas = document.getElementById('canvas');
    canvas.style.backgroundColor = color;
}

function move(x,y,width,height)
{
    rect(width, height, x+30, y+90);
}