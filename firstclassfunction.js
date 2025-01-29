// a();
// b();
// there is differnt between function statemntis a decleration any anywhere of function and function express is  a first to intaliztion and then declartion.
// function statement 
function a() {
    console.log("a close");
}

// function express

var b = function () {
    console.log("b is called");
}

// Function declaration there are like function statement

// Anonymous Function
// function () {
// } there are error show syntax error function statement require a function a name

// Named function expression add name on function
// var c = function xyz() {
//     console.log("c is called");
// }
// c();
// xyz();

// Differnce between parameters & Arguments?
// var b = function (parma1, parma2)is called parameters{
// console.log(b)
// }
// b(1,2); is called Arguments


// First Class Functions (first calss citizenship) Ability to be used like values

var z = function (parma4) {
    return function xyz() {

    }
}
console.log(z());


// Arrow Function 