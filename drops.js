class drop{
    constructor(xPos,yPos){
        this.x = xPos;
        this.y = yPos;
        this.size = 30;
        this.dropClaim = false;
        this.sprite = dropSprite;
    }
    display(){
        push();
        translate(this.x, this.y);
        image(dropSprite, -this.size/2,-this.size/2);
        pop();
    }
    move(){
        this.x = mouseX;
        this.y = mouseY;
    }
    claimDrop(){
        for (var i = 0; i < newDrop.length; i++){
            this.dropClaim = collideCircleCircle(this.x,this.y,this.size,newPlayer.x,newPlayer.y,newPlayer.size-75);
            if(this.dropClaim){
                newDrop.splice(i,1);
                pickupSound.play();
                score += 5;
                return true;
            }
            }
    }
}
