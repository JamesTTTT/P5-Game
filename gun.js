class Bullet {
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.sprite = bulletSprite;
        this.enemyKill = false;
        this.size = 20;
        this.speed = 10;
        this.startDist = 30;

        // STATES THE MOVEMENT OF BULLET
        this.location = createVector(newPlayer.x,newPlayer.y);
        this.target = createVector(newCursor.x, newCursor.y);
        this.distance = this.target.dist(this.location);
        this.mappedDistance = map(this.distance,0,100,1,0);
        this.target.sub(this.location);
        this.direction = this.target.normalize();
        this.x += this.direction.x*this.startDist;
        this.y += this.direction.y*this.startDist;
    }

    //DISPLAYS BULLET SPRITES IN THE CENTER OF OBJECT
    display(){
        push()
        translate(this.x, this.y);
        image(this.sprite, -this.size/2,-this.size/2);
        pop();
    }

    //FOLLOWING THE ABOVE STATED MOVEMENT;
    move(){
       this.x += this.direction.x*this.speed;
       this.y += this.direction.y*this.speed;
    }

    //HITBOXES FOR BULLETS AND ENEMIES. WHEN ENEMY COLLIDES WITH BULLET IT DIES
    hitBox(){
        for (var i = 0; i < enemies.length; i++){
        if(collideCircleCircle(this.x,this.y,this.size,enemies[i].x,enemies[i].y,enemies[i].r)){
            enemies.splice(i,1);
            enemySplat.play();
            score += 10;
            return true;
        }
        }
    }
}
