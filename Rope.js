class Rope{
    constructor(bodyA, bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length: 10
        }
        this.rope=Constraint.create(option);
        World.add(world,this.chain);
    }

    display(){
        var ba= this.chain.bodyA.position;
        var bb=this.chain.bodyB.position;

        line(ba.x,ba.y,bb.x,bb.y);
        strokeWeight(4);
    }
};