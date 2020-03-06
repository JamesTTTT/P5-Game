    class Player {
      constructor() {
        this.x = 360;
        this.y = 360;
        this.size = 40;
        this.moveSpeed = 5;
        this.border = 15;
        this.sprite = playerSprite;
      }

      display() {
        ellipse(this.x, this.y, this.size);
        push();
        translate(this.x,this.y);
        image(this.sprite,-this.size/2,-this.size/2);
        pop();
      };
      move() {
      //W
      if(keyIsDown(87)&&this.y>this.border){
        this.y -= this.moveSpeed;
      }
      //S
      if(keyIsDown(83)&&this.y<height-this.border){
        this.y += this.moveSpeed;
      }
      //A
      if(keyIsDown(65)&&this.x>this.border){
        this.x -= this.moveSpeed;
      }
      //D
      if(keyIsDown(68)&&this.x<width-this.border){
        this.x += this.moveSpeed;
      }
    }
  }
