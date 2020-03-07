class Item {
    constructor() {
        this.x = 360;
        this.y = 20;
        this.w = 30;
        this.h = 30;
        this.r = 0;
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
        idle() {
           push();
           this.r+= 0.02; 
           //translate(width/2, height/2);
           rotate(this.r);
           pop(); 
        }

    }

