let lines = [];
let coordenates = [];
let pushCoordenate = (evento)=> coordenates.push({"x":evento.x,"y":evento.y});
document.addEventListener("click",(event)=>{
    if(coordenates.length===0 || coordenates.length===1){
        pushCoordenate(event);
        if(coordenates.length===2){
            //Calculates longitude
            lines.push(new line(coordenates,lines.length));
        }
    } else{
        coordenates = [];
        pushCoordenate(event);
    }
});