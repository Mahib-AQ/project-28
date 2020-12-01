class Stone {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
      density: 1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/stone.png");
    World.add(world, this.body);
  }

  display() {

    var pos = this.body.position;

    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    image(this.image, pos.x - 32, pos.y - 25, this.width * 3.5, this.height * 2.5);





  }






















}