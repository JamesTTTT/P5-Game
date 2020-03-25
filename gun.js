class Bullet {
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.r = 10;
        this.speed = 5;
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
        //translate(this.x, this.y);
        ellipse(this.x, this.y, this.r);
        pop();
    }
    move(){

       this.x += this.direction.x*this.speed;
       this.y += this.direction.y*this.speed;
       
        /*this.target.mult(this.mappedDistance); 
        this.location.add(this.target);*/


       
       
       
       
       
        /*for (var i = 0; i < enemies.length; i++){
        if (this.x > width - this.r || this.x < this.r) {                
            bullet.splice(i,1);
        }
        if (this.y > width - this.r || this.y < this.r) {
            bullets.splice(i,1);
        }
        }*/

    }
}
