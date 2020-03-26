class menu {
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.height = 120;
        this.width = 200;
        this.sprite = screenOverlay;
        this.signSize= 32;
        this.abilitySprite1 = pullSprite;
        this.abilitySprite2 = sprintSprite;
        this.abilitySprite3 = shrinkSprite;
        this.abilitySprite4 = gunSprite;
    }
    display(){
        push()
        fill(30);
        stroke(200);
        rect(this.x-100, this.y-50,this.width,this.height);
        noStroke();
        fill(255,0,127);
        textFont("Calibri");
        textAlign(CENTER);
        textSize(20);
        text("Death Be Upon You",360,335);
        textSize(20);
        text("Score:"+score,360,412);

        playGame.show();
        playGame.position(this.x-50, this.y-12);
        playGame.size(100, 40);
        playGame.mousePressed(this.play)
        backgroundMusic.stop();
        image(this.sprite, 0, 0);
        pop();
        noLoop();
    }
    play(){
        playGame.hide();
        enemies = [];
        newDrop = [];
        bullets = [];
        score = 0; 
        level = 1;
        nextLvl = 20;
        enemyMultiplier = 1;
        spawnInterval = 1000;
        newPlayer.x = width/2;
        newPlayer.y = height/2;
        defaultItem.x =360;
        defaultItem.y =100;
        //backgroundMusic.loop();
        deathSound.stop();
        loop();
    }
    ui(){
        push();
        fill(30);
        rect(330, 5, 80, 40);
        fill(255);
        textAlign(CENTER);
        textSize(13);
        text("Score:"+score,this.x,20);
        text("Level:"+level,this.x,34);
        if(score>nextLvl){
            level += 1;
            nextLvl *=2;
            levelUp.play();
        }
        fill(30)
        rect(260, 645, 200, 100);
        fill(255)
        //Instructions
        if(level<4){
            text("Use WASD to move",this.x,665);
            text("Drag and Drop items mith mouse",this.x,680);
        }
        if(level===4){
            text("Use E to summon sword",this.x,665); 
        }
        if(level===5){
            text("Use Shift to Shrink",this.x,665); 
        }
        if(level===6){
            text("Use Shift to Shrink+Sprint",this.x,665); 
        }   
        if(level>=7){
            text("Use Spacebar to shoot bullet",this.x,665);
            text("Take aim mith mouse",this.x,680);
        }
        pop();
    }

    abilitySigns(){
        //Pull abilitySign
        if(level>=4){
        push();
        translate(255, 650);
        image(this.abilitySprite1,this.signSize,this.signSize);
        pop();
        }

        //Shrink abilitySign
        if(level>=5){
        push();
        translate(295, 650);
        image(this.abilitySprite2,this.signSize,this.signSize);
        pop();
        }

        //Sprint abilitySign
        if(level>=6){
        push();
        translate(335, 650);
        image(this.abilitySprite3,this.signSize,this.signSize);
        pop();
        }

        //Gun abilitySign
        if(level>=7){
        push();
        translate(375,650);
        image(this.abilitySprite4,this.signSize,this.signSize);
        pop();
    }

    }
}
