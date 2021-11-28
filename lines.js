let coordenates = [];
let root = document.querySelector(':root');
let pushCoordenate = (evento)=> coordenates.push({"x":evento.x,"y":evento.y});
document.addEventListener("click",(event)=>{
    if(coordenates.length===0 || coordenates.length===1){
        pushCoordenate(event);
        if(coordenates.length===2){
            //Calculates longitude
            let dy = coordenates[1].y - coordenates[0].y;
            let dx = coordenates[1].x - coordenates[0].x;
            let dx2 = Math.hypot(dy,dx);
            //Angle
            let orientation = (dx < 0) ? -1 : 1;
            let theta = (Math.asin(dy / dx2)) * (180/Math.PI) * orientation;
            //Position
            let closest_to_left = (coordenates[0].x < coordenates[1].x) ? coordenates[0].x : coordenates[1].x;
            let finalX = Math.abs(closest_to_left - ((dx2 * 0.5) *(1 - Math.cos(theta / (180 / Math.PI)))));
            let finalY = coordenates[0].y + (coordenates[1].y - coordenates[0].y) * 0.5;
            //Sets css variables
            root.style.setProperty("--length",dx2.toString() + "px");
            root.style.setProperty("--angle",theta.toString() + "deg");
            root.style.setProperty("--translateX",finalX.toString() + "px");
            root.style.setProperty("--translateY",finalY.toString() + "px");
        }
    } else{
        coordenates = [];
        pushCoordenate(event);
    }
});