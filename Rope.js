class Rope {
    constructor(body1,body2,offsetX,offsetY ){
this.offsetX=offsetX;
this.offsetY=offsetY;
     var options ={
      bodyA: body1,
      bodyB: body2,
      pointB:{x:this.offsetX,y:this.offsetY}
      }
      this.rope=Constraint.create(options)
      World.add(world,this.rope);
  }
    display(){
       
        var pointB = this.rope.body1
       var pointB=this.rope.body2
    
      
        line(pointB.x ,pointB.y,pointB.x,pointB.y);
    }
    }

   

   