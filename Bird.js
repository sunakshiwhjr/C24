class Bird
{

    //To create the object we use constructor

    constructor(x, y, width, height)
    {
        var option = {

            'restitution' :0.8,             
             'friction': 1,
             'density' : 1
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.width = 50;
        this.height = 50;
        World.add(myWorld, this.body);
    }

    display()
    {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;


        angleMode(RADIANS);
        //or angleMode(DEGREES);
        push();
        translate(pos.x, pos.y);            
        rotate(angle);
        rectMode(CENTER);

        fill("Red")
        rect(0, 0, this.width, this.height);
        pop();
   

    }
}