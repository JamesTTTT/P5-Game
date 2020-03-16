class Item {
    constructor() {
        this.x = 360;
        this.y = 20;
        this.w = 30;
        this.h = 30;
        this.r = 0;
        this.ease = 0.1;
        this.size=64;
        this.sprite = itemSprite;
    }
        display() {
            push();
            translate(this.x,this.y);
            image(this.sprite,-this.size/2,-this.size/2);
            pop();
        };
        interact() {
            this.x = mouseX;
            this.y = mouseY;
        };
        pull(){
            this.targetX = newCursor.x;
            this.targetY = newCursor.y;
            this.distX = this.targetX-this.x;
            this.distY = this.targetY-this.y;
            if(keyIsDown(gameControls[4])){
                this.x += this.distX*this.ease;
                this.y += this.distY*this.ease;
            }
        }

    }

