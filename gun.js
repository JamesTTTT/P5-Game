class Bullet {
    constructor(xSpawn,ySpawn){
        this.x = xSpawn
        this.y = ySpawn;
        this.r = 10;
        this.speed = 0.009;
        this.targetX = newCursor.x;
        this.targetY = newCursor.y;
    }
    display(){
        push()
        //translate(this.x, this.y);
        ellipse(this.x, this.y, this.r);
        pop();
    }
    move(){

        this.x += this.speed*this.targetX;
        this.y += this.speed*this.targetY;

        for (var i = 0; i < enemies.length; i++){
        if (this.x > width - this.r || this.x < this.r) {                
            bullet.splice(i,1);
        }
        if (this.y > width - this.r || this.y < this.r) {
            bullets.splice(i,1);
        }
        }

    }
}
