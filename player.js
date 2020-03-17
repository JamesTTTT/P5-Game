    class Player {
      constructor() {
        this.x = width/2;
        this.y = height/2;
        this.size = 100;
        this.size2 = 64;
        this.moveSpeed = 5;
        this.border = 15;
        this.sprite = playerSprite;
        this.sprite2 = playerSprite2;
        this.enemyHit = false;
      }

      display() {
        if(keyIsDown(gameControls[5])){
          push();
          translate(this.x, this.y);
          image(this.sprite2,-this.size2/2,-this.size/2);
          pop();
        } else { 
        push();
        translate(this.x,this.y);
        image(this.sprite,-this.size/2,-this.size/2);
        pop();
      }
    };

      move() {
      //W
      if(keyIsDown(gameControls[0])&&this.y>this.border){
        this.y -= this.moveSpeed;
      }
      //S
      if(keyIsDown(gameControls[1])&&this.y<height-this.border){
        this.y += this.moveSpeed;
      }
      //A
      if(keyIsDown(gameControls[2])&&this.x>this.border){
        this.x -= this.moveSpeed;
      }
      //D
      if(keyIsDown(gameControls[3])&&this.x<width-this.border){
        this.x += this.moveSpeed;
      }
    }
    collision(){
      for (var i = 0; i < enemies.length; i++){
      this.enemyHit = collideCircleCircle(this.x,this.y,this.size-75,enemies[i].x,enemies[i].y,enemies[i].r);
      if(this.enemyHit){
        return true;
      };
    }
  }
  sprint(){
    if(keyIsDown(gameControls[5])){
      this.moveSpeed = 7;
    } else{
      this.moveSpeed = 5;
    }
  };
}
