class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 1,
            friction: 0,
        }

        this.snow1 = loadImage("snow4.webp");
        this.snow2 = loadImage("snow5.webp");
        this.r = 40;
        this.body = Bodies.circle(x, y, this.r, options);
        
         
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        image(this.snow1,0,0,this.r,this.r);
        image(this.snow2,0,0,this.r,this.r);
        pop();
    }

}