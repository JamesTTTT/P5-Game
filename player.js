    let player ={
    x: 360,
    y: 360,
    moveSpeed:5,
    border: 15,

    display: function() {
      ellipse(this.x, this.y, 30, 30);
    },
    move: function(){
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
    },

    
  }


