class Tower {
    constructor(xPos,yPos,pos){
        this.x = xPos;
        this.y = yPos;
        this.size = 128;
        this.position = pos;
        this.sprite = [towerSprite1,towerSprite2,towerSprite3,towerSprite4];
        this.bulletHit = false;
        this.arraySelector;

        switch(this.position) {
            case "topLeft":
                this.arraySelector = 0;
                this.health = 100;
                break;
            case "topRight":
                this.arraySelector = 1;
                this.health = 100;
                break;
            case "bottomLeft":
                this.arraySelector = 2;
                this.health = 100;
                break;
            case "bottomRight":
                this.arraySelector = 3;
                this.health = 100;
                break;
        }
    }
    display(){
        push();
        translate(this.x, this.y);
        image(this.sprite[this.arraySelector], -this.size/2, -this.size/2,);
        pop();
    }
}