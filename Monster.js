class Monster{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
    
        this.body=Bodies.circle(x , y , r/2 , options);
        //this.body.scale=0.2;
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("sprites/Monster1.png");
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0, this.r, this.r);
        pop();
    }
  };