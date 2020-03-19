class menu {
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.height = 120;
        this.width = 200;
        this.sprite = screenOverlay;
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
        this.score = score;
        text("Score:"+this.score,360,412);

        playGame.show();
        playGame.position(this.x-50, this.y-12);
        playGame.size(100, 40);
        playGame.mousePressed(this.play)
        backgroundMusic.stop();
        //deathSound.play();
        image(this.sprite, 0, 0);
        pop();
        noLoop();
    }
    play(){
        playGame.hide();
        enemies = [];
        score = 0; 
        level = 1;
        //backgroundMusic.loop();
        deathSound.stop();
        newPlayer.x = width/2;
        newPlayer.y = height/2;
        defaultItem.x =360;
        defaultItem.y =20;
        loop();
    }
    ui(){
        push();
        this.level = level;
        this.score = this.score;
        fill(30);
        rect(330, 5, 60, 40);
        fill(255);
        textAlign(CENTER);
        textSize(13);
        text("Score:"+this.score,this.x,20);
        text("Level:"+this.level,this.x,34);
        pop();
    }
}