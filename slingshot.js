class Slingshot{
    constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 20
    }
   // this.bodyA = loadImage('polygon.png');
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world, this.sling)
    }

    attach(body){
    this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        }
    //image(this.bodyA, 100, 200, 50, 50)
    stroke("aqua")
    strokeWeight(3.5)
    line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)
    }

}