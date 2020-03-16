class Enemy {
    constructor(){
        switch(spawn){
            case 0:
                this.x = 70;
                this.y = 70;
                break;
            case 1:
                this.x = 650;
                this.y = 70;
                break;
            case 2:
                this.x = 70;
                this.y = 650;
                break;
            case 3:
                this.x = 650;
                this.y = 650;
                break;
        }
        this.width= 20;
        
    }
}




/*class Enemy {
    constructor() {
        this.x = 10;
        this.y = 100;
        this.r = 20;
        this.speedx = 1;
        this.speedy = 1;
        this.directionx = 10;
        this.directiony = 1;
    }
        display() {
            ellipse(this.x, this.y, this.r);
        };
        move() {
            this.x = this.x + this.speedx * this.directionx;
            this.y = this.y + this.speedy * this.directiony;
            if (this.x > width - this.r || this.x < this.r) {
                this.directionx *= -1;
            }
            if (this.y > width - this.r || this.y < this.r) {
                this.directiony *= -1;
            }
        }

    }*/