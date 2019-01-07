/* Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function. */

const defineFirstArg = (func, arg) => 
//   const firstArg = arg;
   (...nums) => {
    // let result = func(firstArg);
    // for (let i = 0; i < arguments.length; i++) {
    //   return result = func(firstArg, arguments[i]);
    // console.dir(func);
    // arguments[i];
      return func(arg, ...nums);
    // }
  }
;

// Uncomment these to check your work!
const subtract = function (big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
console.log(subFrom20(10)); // should log: 15
console.log(subFrom20(1, 5, 9)); // should log: 15
