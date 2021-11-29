class line {
    constructor(c,id){
        this.id = id;
        this.setCoordenates(c);
        this.draw();
    }
    id = null;
    coordenates = [];
    dy = 0;
    dx = 0;
    dx2 = 0;
    theta = 0;
    finalX = 0;
    finalY = 0;
    setCoordenates(c){
        this.coordenates = c;
    }
    draw(){
        this.dy = this.coordenates[1].y - this.coordenates[0].y;
        this.dx = this.coordenates[1].x - this.coordenates[0].x;
        this.dx2 = Math.hypot(this.dy,this.dx);
        //Angle
        let orientation = (this.dx < 0) ? -1 : 1;
        this.theta = (Math.asin(this.dy / this.dx2)) * (180/Math.PI) * orientation;
        //Position
        let closest_to_left = (this.coordenates[0].x < this.coordenates[1].x) ? this.coordenates[0].x : this.coordenates[1].x;
        this.finalX = Math.abs(closest_to_left - ((this.dx2 * 0.5) *(1 - Math.cos(this.theta / (180 / Math.PI)))));
        this.finalY = this.coordenates[0].y + (this.coordenates[1].y - this.coordenates[0].y) * 0.5;
        //Renders the line
        document.getElementsByClassName("lines_container")[0].innerHTML = document.getElementsByClassName("lines_container")[0].innerHTML + `
        <div class='single_line_container' id = 'SLC${this.id}''>
            <style>
                #line${this.id}{
                    height: 0.1px;
                    width: ${this.dx2}px;
                    background-color: #0000FF;
                    position: absolute;
                    transform: rotateZ(${this.theta}deg); 
                    top:${this.finalY}px;
                    left:${this.finalX}px;
                }
            </style>
            <div id = 'line${this.id}'></div>
        <div>`;
    };
}



