// closures
// A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). in other words closures gives you access to an outer function's scope form an inner function.

// function x (){
//     var a =7;
//     function y(){
//         console.log(a)
//     }
//     y();
// }
// x();

function x (){
    var a = 7;
    function y(){
        console.log(a)
    } 
    return y;
}

var z = x();
console.log(z);
z();