var y=7;
function display() {
    var p=y;
    console.log(p);
    var y=10; //Hoisting is JavaScript's default behavior
    // of moving declarations to the top of the scope.
}

display();