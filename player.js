    class Player {
      constructor() {
        this.x = width/2;
        this.y = height/2;
        this.size = 100;
        this.fixBox = 65;
        this.moveSpeed = 5;
        this.border = 15;
        this.sprite = playerSprite;
        this.sprite2 = playerSprite2;
        this.enemyHit = false;
      }

      //IF UNDER LEVEL 5 (PRE SHRINK) IT WILL DISPLAY PLAYER SPRITE. 
      display() {
        if(level<5){
          push();
          translate(this.x, this.y);
          image(this.sprite,-this.size/2,-this.size/2);
          pop();
        }
      }

      //MOVEMENT WITHIN GAME BORDERS
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

    //HITBOX FOR COLLIDING WITH ENEMIES
    hitBox(){
      for (var i = 0; i < enemies.length; i++){
      this.enemyHit = collideCircleCircle(this.x,this.y,this.size-this.fixBox,enemies[i].x,enemies[i].y,enemies[i].r);
      if(this.enemyHit){
        return true;
      };
    }
  }

  //SPRINT ABILITY. WHEN PRESSIGN SHIFT SPEED WILL INCREASE TO 7
  sprint(){
    if(keyIsDown(gameControls[5])){
      this.moveSpeed = 7;
    } else{
      this.moveSpeed = 5;
    }
  }

  // SHRINK ABILITY. WHEN PRESSING SHIFT SPRITE AND SIZE WILL CHANGE
  shrink(){
    if(keyIsDown(gameControls[5])){
      push();
      translate(this.x, this.y);
      this.fixBox = 45;
      this.size = 64;
      image(this.sprite2,-this.size/2,-this.size/2);
      pop();
    }
    else{
      push();
      translate(this.x,this.y);
      this.fixBox = 70;
      this.size = 100;
      image(this.sprite,-this.size/2,-this.size/2);
      pop();
      }
    }
      
  }


