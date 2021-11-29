# draw_lines
JS library to draw lines from one coordenate to another.

To use it, 
1) Import only the lines.js file to your project.
2) Have a div in your html with the class "lines_container", that will contain the lines dom elements.
3) In your script, create an empty array that will contain the lines objects.
4) In your script, push to the array a new object of the class line. The constructor receives two arguments: 1: an array ob objects with the start an end coordenates. 2: the id of the new line.

Example:

let lines = [];
let coordenates = [
    {
        "x":10,
        "y":20,
    },
    {
        "x":120,
        "y":300,
    }
];
lines.push(new line(coordenates,lines.length));

Example to draw line every two clicks:
let lines = [];
let coordenates = [];
let pushCoordenate = (evento)=> coordenates.push({"x":evento.x,"y":evento.y});
document.addEventListener("click",(event)=>{
    if(coordenates.length===0 || coordenates.length===1){
        pushCoordenate(event);
        if(coordenates.length===2){
            lines.push(new line(coordenates,lines.length));
        }
    } else{
        coordenates = [];
        pushCoordenate(event);
    }
});
