class menu {
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.height = 120;
        this.width = 200;
        this.signSize= 32;
        this.fade= 0;
        this.overlaySprite = screenOverlay;
        this.logoSprite = gameLogo;
        this.abilitySprite1 = pullSprite;
        this.abilitySprite2 = sprintSprite;
        this.abilitySprite3 = shrinkSprite;
        this.abilitySprite4 = gunSprite;
    }
    display(){
        push()
        //DEATH SCREEN
        fill(38,34,72,200);
        strokeWeight(4);
        stroke(10);
        rect(this.x-100, this.y-50,this.width,this.height);
        noStroke();
        fill(203,12,255);
        textFont("Times-New-Roman");
        textAlign(CENTER);
        textSize(20);
        text("Death Be Upon You",360,335);
        textSize(20);
        text("Score:"+score,360,412);

        //PLAY-BUTTON DETAILS
        playGame.show();
        playGame.position(this.x-50, this.y-12);
        playGame.size(100, 40);
        playGame.style('background-color',color(100, 115, 195));
        playGame.style('font-size','21px');
        playGame.style('font-family','Times-New-Roman');
        //ACTIVATES PLAY FUNCTION BELOW
        playGame.mousePressed(this.play);
        //CHANGE WEAPON BUTTON
        changeWeapon.hide();
        //MUSIC STOP
        backgroundMusic.stop();

        //LOGO
        image(this.logoSprite,50,80);
        pop();
        noLoop();
    }
    play(){
        //HIDES BUTTONS, RESETS GAME VALUES AND STARTS GAME
        playGame.hide();
        changeWeapon.show();
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
        backgroundMusic.setVolume(0.4);
        backgroundMusic.loop();
        deathSound.stop();
        loop();
    }
    //IN GAME UI
    ui(){
        push();
        image(this.overlaySprite, 0, 0);
        strokeWeight(4);
        stroke(10);
        fill(38,34,72,200);
        rect(330, 5, 80, 40);
        noStroke();
        fill(255);
        textAlign(CENTER);
        textSize(13);
        text("Score:"+score,this.x,20);
        text("Level:"+level,this.x,34);

        //LEVEL SYSTEM THAT ADDAS A LEVEL. AFTER THE NEXT LEVEL WILL REQUIRE DOUBLE SCORE
        if(score>nextLvl){
            level += 1;
            nextLvl *=2;
            levelUp.play();
            this.fade = 255;
        }

        //LEVEL UP TEXT
        push();
        textFont("Times-New-Roman");
        textSize(45);
        fill(203,12,255, this.fade);
        text("Level Up",360,360);
        pop();
        //LEVEL UP FADE OUT
        if (this.fade>1){
            this.fade -=3
        }

        fill(38,34,72,200);
        stroke(10);
        rect(260, 645, 200, 100);
        noStroke();
        fill(255)
        //INSTRUCTIONS CHANGE AFTER LEVELING UP
        if(level<4){
            text("Use WASD to move",this.x,665);
            text("Drag and Drop items mith mouse",this.x,680);
        }
        if(level===4){
            text("Use E to summon sword",this.x,665); 
        }
        if(level===5){
            text("Use Shift to Shrink",this.x,665); 
            text("shift will disable cursor",this.x,680);
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
    // SHOWS THE SIGNS OF WHAT ABILITY YOU UNLOCKED
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
    //BUTTON FOR CHANGING SWORD SPRITE
    changeBtn(){
        changeWeapon.show();
        changeWeapon.position(10,this.y-30);
        changeWeapon.size(65,40);
        changeWeapon.style('background-color',color(100, 115, 195,200));
        //WHEN PRESSED ACTIVATES changeWeapon FUNCTION
        changeWeapon.mousePressed(this.changeWeapon);
    }
    // CHOOSES WEAPON USING ARRAY SELECTOR
    changeWeapon(){
        buttonSound.play();
        if(defaultItem.arraySelector === 0){
            defaultItem.arraySelector = 1;
        }
        else if(defaultItem.arraySelector === 1){
            defaultItem.arraySelector = 2;

        }else if(defaultItem.arraySelector === 2){
            defaultItem.arraySelector = 0;
        }
    }
}
