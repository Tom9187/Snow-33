class Snow {
constructor(x,y,r){
var options={
restitution:0.4,
isStatic:false
}
this.body= Bodies.circle(x,y,r,options);
this.x=x
this.y=y
this.r=r
this.image=loadImage("snow4.webp");
World.add(world,this.body);
}
display() {
    var pos = this.body.position;
     var angle = this.body.angle;
      push();
       translate(pos.x,pos.y);
        rotate(angle);//If you want to rotate the snow with an angle. ex rotate(90)
         noStroke();
          fill("white");
          Snow.scale=10 
           imageMode(CENTER);
        image(this.image, 0, 0,25,25); 
    pop();

}

}