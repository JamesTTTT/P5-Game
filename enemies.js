class Enemy {
    constructor(xSpawn,ySpawn,spawn){
        this.x=xSpawn;
        this.y=ySpawn;
        this.spawn = spawn;
        this.r = 30;
        this.speed = 5;
        //this.direction = -1;
        this.sprite = [enemySprite1,enemySprite2,enemySprite3,enemySprite4];
        this.arraySelector;

        this.location = createVector(this.x,this.y);
        this.target = createVector(newPlayer.x, newPlayer.y);
        this.distance = this.target.dist(this.location);
        this.mappedDistance = map(this.distance,0,100,1,0);
        this.target.sub(this.location);
        this.direction = this.target.normalize();

        switch(this.spawn){
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
    move(){
        this.x += this.direction.x*this.speed;
        this.y += this.direction.y*this.speed;

        if (this.x > width - this.r || this.x < this.r) {
            this.direction.x *= -1;
        }
        if (this.y > width - this.r || this.y < this.r) {
            this.direction.y *= -1;
        }
    }
    display(){
        push();
        translate(this.x, this.y);
        image(this.sprite[this.arraySelector], -this.r/2,-this.r/2);
        pop();
    }
}
