class Item {
    constructor() {
        this.x = 360;
        this.y = 100;
        this.w = 30;
        this.h = 30;
        this.r = 0;
        this.ease = 0.2;
        this.size=64;
        this.sprite = [itemSprite2,itemSprite,itemSprite3];
        this.arraySelector = 0;
        this.enemykill = false;
    }
        display() {
            push();
            translate(this.x,this.y);
            image(this.sprite[this.arraySelector],-this.size/2,-this.size/2);
            pop();
        };

        interact() {
            this.x = mouseX;
            this.y = mouseY;
        };

        pull(){
            this.targetX = newCursor.x;
            this.targetY = newCursor.y;
            this.distX = this.targetX-this.x;
            this.distY = this.targetY-this.y;
            if(keyIsDown(gameControls[4])){
                this.x += this.distX*this.ease;
                this.y += this.distY*this.ease;
            }
        };

        hitBox(){
            for (var i = 0; i < enemies.length; i++){
            this.enemykill = collideCircleCircle(this.x,this.y,this.size-30,enemies[i].x,enemies[i].y,enemies[i].r);
            if(this.enemykill){
                enemies.splice(i,1);
                score += 10;
                return true;
            }
            }
        };

    }

