/*
INPUT: Array, Callback/conditional
OUTPUT: Boolean
Array.forEach(callback(el) === true?)
if (accTrue > (Array.length / 2)) return true, else false
*/

/* const majority = (arr, callback) => {
  arr.reduce((acc, currentVal) => {
    if (callback(currentVal)) {
        console.log('hi');
      //let acc = 0;
      acc += 1;
      console.log(acc);
    }


  if (acc > (arr.length / 2)) {
    console.log('true');
  } else {
    console.log('false');
  }
}; */


/* const majority = (arr, callback) => {
    let i = 0;
    arr.forEach((el) => {
        if(callback(el)) {
            i++;
        }
    })
    if(i > (arr.length / 2)) {
        return true
    } else {
        return false
    }
} */

const majority = (arr, callback) => {
  let i = 0;
  arr.forEach((el) => {
    if (callback(el)) {
      i++;
    }
  });
  return (i > (arr.length / 2));
};


// Uncomment these to check your work!
const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

/* function createFunction() {
	const callFunc = () => {
     console.log('hello');
  };
}

// UNCOMMENT THESE TO TEST YOUR WORK!
var function1 = createFunction();
function1(); */
