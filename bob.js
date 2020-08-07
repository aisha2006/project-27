class Bob {
    constructor(x, y,radius) {
      var options = {
           isStatic:false,
           density:0.5,
           restitution:1.0
      }

      this.body = Bodies.circle(x, y,radius, options);
      this.radius= radius;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);

      ellipseMode(CENTER);
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
  