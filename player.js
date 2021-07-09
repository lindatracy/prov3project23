class Player{
    constructor(x,y,w,h){
     this.w=w;
     this.h=h;
     this.x=x;
     this.y=y;
     var options={
         isStatic:true
     }
     this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options);
     World.add(world,this.body);
     this.image=loadImage("assets/player.png")
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}