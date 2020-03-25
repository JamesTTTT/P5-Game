class drop{
    constructor(){
        this.x = 360;
        this.y = 360;
        this.size = 40;
    }
    drops(){
        ellipse(this.x, this.y,this.size);
    }
    move(){
        this.x = newCursor.x;
        this.y = newCursor.y;
    }
}
