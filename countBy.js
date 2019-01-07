const arr1 = [1, 2, 3, 4, 5, 6];
const countBy = (array, callback) => {
  const arrResult = [];
  array.forEach(el => arrResult.push(callback(el)));
  const objResult = arrResult.reduce((total, answer) => {
    if (answer in total) {
      total[answer]++;
    } else {
      total[answer] = 1;
    }
    return total;
  }, {});
  return objResult;
};

// console.log('countBy(arr1)', countBy(arr1, (x) => {x + 2}));

// const newResult = {};

// const add1 = (x, y) => x + y;

// console.log(arr1.reduce(add1));
/*
array.reduce((total, answer) => {
  if (answer in total) {
    total[answer]++;
  }
  else {
    total[answer] = 1;
  }
  return total;
}, {});

/*
INPUT: array, callback
OUTPUT: new {};
        object.key = callback(array[i]), no dupes.
        object.value = counterOf(object.key)
PROCESS: iterate over array.
        apply callback: callback(i);
            push result as key in new obj.
            count result;
            push count as value to THAT key.

// Uncomment these to check your work!
*/
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

/* Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value [let returnVal = callback(i)] from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned. */

/*
FROM MDN:
Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
*/