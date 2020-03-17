class Enemy {
    constructor(){
        this.x=100;
        this.y=100;
        this.r = 20;
        this.speed = 0.01;
    }
    move(){
        this.targetX = newPlayer.x;
        this.targetY = newPlayer.y;
        this.distX = this.targetX - this.x;
        this.distY = this.targetY - this.y;
        this.x += this.distX*this.speed;
        this.y += this.distY*this.speed;
        
    }
    display(){
        push();
        ellipse(this.x, this.y, this.r);
        pop();
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