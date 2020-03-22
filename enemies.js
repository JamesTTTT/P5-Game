class Enemy {
    constructor(xSpawn,ySpawn,spawn){
        this.x=xSpawn;
        this.y=ySpawn;
        this.spawn = spawn;
        this.r = 20;
        this.speed = 0.009;
        this.direction = -1;
        switch(this.spawn){
            case "topLeft":
                this.targetX = newPlayer.x;
                this.targetY = newPlayer.y;
                break;
            case "topRight":
                this.targetX = newPlayer.x*this.direction;
                this.targetY = newPlayer.y;
                break;
            case "bottomLeft":
                this.targetX = newPlayer.y*this.direction;
                this.targetY = newPlayer.x;
                break;
            case "bottomRight":
                this.targetX = newPlayer.x*this.direction;
                this.targetY = newPlayer.y*this.direction;
                break;
    }
}
    move(){
        this.x += this.speed*this.targetX;
        this.y += this.speed*this.targetY;
        if (this.x > width - this.r || this.x < this.r) {
            this.targetX *= -1;
        }
        if (this.y > width - this.r || this.y < this.r) {
            this.targetY *= -1;
        }
    }
    display(){
        push();
        ellipse(this.x, this.y, this.r);
        pop();
    }
}
