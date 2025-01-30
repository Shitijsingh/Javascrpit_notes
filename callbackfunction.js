// what is a callback Function in Javascript

setTimeout(function () {
    console.log("Timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}

x(function y() {
    console.log("y");
});


// Deep about Event listeners

function attchEventListener() {
    let count = 0;
    document.getElementById("Click Me").addEventsListeners("Click", function xyz() {
        console.log("Button xlicked", ++count);
    });
};
addEventListener()