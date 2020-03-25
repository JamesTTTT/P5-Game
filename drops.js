class drop{
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 15;
    }
    display(){
        ellipse(this.x,this.y,this.size);
    }
    move(){
        this.x = newCursor.x;
        this.y = newCursor.y;
    }
}
