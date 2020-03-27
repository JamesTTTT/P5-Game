class drop{
    constructor(xPos,yPos,type){
        this.x = xPos;
        this.y = yPos;
        this.type = type;
        this.size = 30;
        this.dropClaim = false;
        this.sprite = [dropSprite1,dropSprite2,dropSprite3];
        this.arraySelector;

        //DECIDES EACH TYPE OF DROP WORTH AND SPRITE
        switch(this.type){
            case "silver":
                this.arraySelector = 0;
                this.addScore = 5;
                break;
            case "gold":
                this.arraySelector = 1;
                this.addScore = 10;
                break;
            case "diamond":
                this.arraySelector = 2;
                this.addScore = 15;
                break;
        }
    }
    // DISPLAYS SPRITE WITH CORRECT SPRITE
    display(){
        push();
        translate(this.x, this.y);
        image(this.sprite[this.arraySelector], -this.size/2, -this.size/2);
        pop();
    }
    //MOVEMENT FOR DRAGGING
    move(){
        this.x = mouseX;
        this.y = mouseY;
    }
    //COLLIDES FOR DROP AND PLAYER. WHEN COLLIDED IT CLAIMS THE SCORE
    claimDrop(){
        for (var i = 0; i < newDrop.length; i++){
            if(collideCircleCircle(this.x,this.y,this.size,newPlayer.x,newPlayer.y,newPlayer.size-newPlayer.fixBox)){
                newDrop.splice(i,1);
                pickupSound.play();
                score += this.addScore;
                return true;
            }
        }
    }
}
