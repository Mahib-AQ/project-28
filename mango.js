class Mango {

    constructor(x, y, diameter) {

        var options = {

            isStatic: true,
            restitution: 0,
            friction: 1

        }

        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.diameter, this.diameter)
        image(this.image, pos.x - 21, pos.y - 27, this.diameter * 3.1, this.diameter * 2.6);
    }

}