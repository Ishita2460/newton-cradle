class bob{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':0.2,
            'density':0.2
        }
        this.r=r ;
        this.body =Bodies.circle(x,y,r/2,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
       push();
        translate(this.body.position.x, this.body.position.y);
        fill("teal")
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
      }
}