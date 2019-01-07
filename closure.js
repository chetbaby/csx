// function createFunctionPrinter(input) {
//   function callFunc(x) {
//     console.log(input + x);
//   }
//   return callFunc;
// }

// // UNCOMMENT THESE TO TEST YOUR WORK!
// var printSample = createFunctionPrinter('sample');
// printSample(' dude!');
// var printHello = createFunctionPrinter('hello');
// printHello();
// let printGIJoe = createFunctionPrinter('yoooooo JOE!!!')
// printGIJoe();

function addByX(x) {
  // const y = 0;
  function adder(y) {
  // console.log(x);
    // console.log(y);
    y += x;
    return y;
  }
  return adder;
}

const addByTwo = addByX(2);
// console.log('addByX(1);', addByX(1));
// console.log('addByX(2);', addByX(2));
// console.log('addByX(3);', addByX(3));


// now call addByTwo with an input of 1
// console.log(addByTwo(1)); // should return 3
// console.log(addByTwo(2)); // should return 4
// console.log(addByTwo(3));

// const adder = () => {
//   return function inAdder() {
//     console.log('heeeeyaaaa');
//   }
// }

// const badder = adder()
// badder()

function once(func) {
  let ran = false;// firstCall; //set flag for flow control. only var in backpack.
  return function () { // returning anonymous func
    if (ran) { // 'if ran is true
      return firstCall; // conditional. 2nd stage
    } // unecessary. no return after 'else'
    ran = true;
    firstCall = func.apply(this, arguments);// don't know 'apply'
    // func = null; // make func useless after first call
    return firstCall;
  };
}
const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
/* console.log(onceFunc(4)); // should log 6
console.log(onceFunc(10)); // should log 6
console.log(onceFunc(9001)); // should log 6 */

function gabe(callback) {
  let state = false;
  return function(input) {
    if(!state) {
      state = true;
      console.log(state);
    }
  }
}

const getSome = gabe()

console.log(getSome());
console.log(getSome());