class Ground{
  constructor(x,y){
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,1800,10,options);
      this.x =x;
      this.y = y;
      this.width = 1800;
      this.height = 10;
      World.add(world,this.body);
  } 
  display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y,1800,10);
  }
}