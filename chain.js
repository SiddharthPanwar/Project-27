class Chain {
    constructor(bodyA,bodyB,offsetX,offsetY){
      
      this.offsetX=offsetX;
      this.offsetY=offsetY; 

        var options = {
         bodyA : bodyA,
         bodyB : bodyB,
         pointB:{x:this.offsetX, y:this.offsetY}
  
      } 
  
       this.chain = Constraint.create(options);
       World.add(world,this.chain);    
     
      }
  
   display(){
   strokeWeight(3);
   var pointA = this.chain.bodyA.position;
   var pointB = this.chain.bodyB.position;
   
   var Anchor1x=pointA.x;
   var Anchor1y=pointA.y;
   
   var Anchor2X=pointB.x+this.offsetX;
   var Anchor2Y=pointB.y+this.offsetY;
   
   line(Anchor1x,Anchor1y,Anchor2X,Anchor2Y);
  
    }
     
  }