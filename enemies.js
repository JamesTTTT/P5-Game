class Enemy {
    constructor(xSpawn,ySpawn,spawn){
        this.x=xSpawn;
        this.y=ySpawn;
        this.spawn = spawn;
        this.r = 20;
        this.speed = 0.009;
        this.direction = -1;
        this.sprite = [enemySprite1,enemySprite2,enemySprite3,enemySprite4];
        this.arraySelector;

        switch(this.spawn){
            case "topLeft":
                this.targetX = newPlayer.x;
                this.targetY = newPlayer.y;
                this.arraySelector = 0;
                break;
            case "topRight":
                this.targetX = newPlayer.x*this.direction;
                this.targetY = newPlayer.y;
                this.arraySelector = 1;
                break;
            case "bottomLeft":
                this.targetX = newPlayer.y*this.direction;
                this.targetY = newPlayer.x;
                this.arraySelector = 2;
                break;
            case "bottomRight":
                this.targetX = newPlayer.x*this.direction;
                this.targetY = newPlayer.y*this.direction;
                this.arraySelector = 3;
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
        translate(this.x, this.y);
        image(this.sprite[this.arraySelector], -this.r/2,-this.r/2);
        pop();
    }
}
