/*
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/
function after(xTimes, callback) {
  var timesRan = 0;
  return function (x) {
    timesRan++;
    if (timesRan >= xTimes) {
      return callback(x);
    }
  };
}

function called(string) {
  return (`hello ${  string}`);
};
var afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> prints undefined
console.log(afterCalled('world')); // -> prints undefined
console.log(afterCalled('world')); // -> prints 'hello world'