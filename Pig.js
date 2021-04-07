class Pig
{

    //To create the object we use constructor

    constructor(x, y)
    {
        var option = {

            'restitution' :0.8,
            'friction' : 0.3,
            'density' : 1
        }
        this.body = Bodies.rectangle(x,y,50, 50,option);
        this.width = 50;
        this.height = 50;
        World.add(myWorld, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);
        //or angleMode(DEGREES);
        push();
        translate(pos.x, pos.y);            
        rotate(angle);
        fill("Yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
   

    }
}