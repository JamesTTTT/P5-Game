class Item {
    constructor() {
        this.x = 360;
        this.y = 100;
        this.w = 30;
        this.h = 30;
        this.r = 0
    }
        display() {
            ellipse(this.x, this.y, this.w, this.h);
        };
        interact() {
            this.x = mouseX;
            this.y = mouseY;
        };
        idle() {
           this.r+= 0.02; 
           translate(width/2, height/2);
           rotate(this.r); 
        }

    }

