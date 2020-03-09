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

        playGame.show();
        playGame.position(this.x-50, this.y-20);
        playGame.size(100, 40);
        playGame.mousePressed(this.play)
        pop();
        noLoop();
    }
    play(){
        playGame.hide();
        loop();
    }
}