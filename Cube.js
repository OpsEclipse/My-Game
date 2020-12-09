class Cube{
    constructor(x,y){
        var options = {
            //isStatic:true,
            restitution : 0.8,
            density : 1.0,
            friction : 1.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}