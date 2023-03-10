class Tower {
    constructor(xPos,yPos,pos){
        this.x = xPos;
        this.y = yPos;
        this.size = 128;
        this.position = pos;
        this.sprite = [towerSprite1,towerSprite2,towerSprite3,towerSprite4];
        this.arraySelector;

        //EVERY TOWER POSITION HAS A UNIQUE SPRITE
        //ARRAY SELCETOR CHOOSES SPRITE 
        switch(this.position) {
            case "topLeft":
                this.arraySelector = 0;
                break;
            case "topRight":
                this.arraySelector = 1;
                break;
            case "bottomLeft":
                this.arraySelector = 2;
                break;
            case "bottomRight":
                this.arraySelector = 3;
                break;
        }
    }
    //DISPLAYS IMAGE IN CENTER OF OBJECT. ARRAY SELCETOR CHOOSES SPRITE 
    display(){
        push();
        translate(this.x, this.y);
        image(this.sprite[this.arraySelector], -this.size/2, -this.size/2,);
        pop();
    }
}