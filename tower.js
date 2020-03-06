class Tower {
    constructor(xPos,yPos, pos){
        this.x = xPos;
        this.y = yPos;
        this.size = 70;
        this.position = pos;

        switch(this.position) {
            case "topLeft":
                break;
            case "topRight":
                break;
            case "bottomLeft":
                break;
            case "bottomRight":
                break;
        }
    }
    display(){
        ellipse(this.x, this.y, this.size);
    }
}