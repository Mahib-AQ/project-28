class Chain {
    constructor(bodyA, b) {
        var options = {
            bodyA: bodyA,
            pointB: b,
            stiffness: 0.003,
            length: 15
        }
        this.chain = Matter.Constraint.create(options);
        this.pointB = b;
        World.add(world, this.chain);
    }

    fly() {
        this.chain.bodyA = null;
    }

    attach(obj) {

        this.chain.bodyA = obj;
       


    }

    display() {

        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }





}