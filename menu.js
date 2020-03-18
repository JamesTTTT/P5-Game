class menu {
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.height = 100;
        this.width = 200;
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
        textSize(24);
        text("Try Again Noob",360,335);

        playGame.show();
        playGame.position(this.x-50, this.y-13);
        playGame.size(100, 40);
        playGame.mousePressed(this.play)
        backgroundMusic.stop();
        pop();
        noLoop();
    }
    play(){
        playGame.hide();
        score = 0; 
        backgroundMusic.play();
        newPlayer.x = width/2;
        newPlayer.y = height/2;
        loop();
    }
}