class Bullet {
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.sprite = bulletSprite;
        this.size = 10;
        this.speed = 10;
        this.startDist = 30;
        this.location = createVector(newPlayer.x,newPlayer.y);
        this.target = createVector(newCursor.x, newCursor.y);
        this.distance = this.target.dist(this.location);
        this.mappedDistance = map(this.distance,0,100,1,0);
        this.target.sub(this.location);
        this.direction = this.target.normalize();
        this.x += this.direction.x*this.startDist;
        this.y += this.direction.y*this.startDist;
    }
    display(){
        push()
        translate(this.x, this.y);
        image(this.sprite, -this.size/2,-this.size/2);
        pop();
    }
    move(){
       this.x += this.direction.x*this.speed;
       this.y += this.direction.y*this.speed;
    }
}
