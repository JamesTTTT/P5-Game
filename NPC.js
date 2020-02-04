let item ={
    x:360,
    y:100,
    w:30,
    h:30,

display: function(){
    ellipse(this.x, this.y, this.w, this.h);
},

interact: function(){
    this.x = mouseX;
    this.y = mouseY; 
    
    },

force: function(){


}
}


