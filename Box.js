class Box {
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 1.0
        }

        //create body
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height; 

        //add body to world
        World.add(world,this.body);
    }

    //draw body /display body
    display()
    {
        var pos = this.body.position;
        var angle =this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);

        rectMode(CENTER);
        strokeWeight(3);
        stroke("yellow");
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}