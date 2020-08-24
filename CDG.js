class CDG {
    constructor (A, B) {

    
    
    var options = {
        bodyA:A,
        bodyB:B,stiffness:0.5,length:5
    }

    this.cdg=Constraint.create(options);
    World.add(world,cdg);
}
display (){
    strokeWeight(5);
    line (A.body.position.x, A.body.position.y, B.body.position.x, B.body.position.y);
}
    
}