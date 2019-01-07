/* Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth. */
/*
input:
output:

*/

// ADD CODE HERE
/* function cycleIterator(array) {
  let counter = 0;
  let hasAlreadyRun = false;
  function innerFnc() {
    if (counter === 0 && hasAlreadyRun === false) {
      counter++;
      hasAlreadyRun = true;
      return array[0];
    }
    if (counter < array.length) {
      counter++;
      return array[counter - 1];
    }
    if (counter === array.length) {
      counter = 0;
      return array[counter];
    }
  }
  return innerFnc;
} */

function cycleIterator(array) {
  let index = 0;
  function innerFnc() {
    const result = array[index++];
    if (index >= array.length) index = 0;
    return result;
}
  return innerFnc;
}
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'a
console.log(getDay()); // should log: 'Fri'a
console.log(getDay()); // should log: 'Fri'a
console.log(getDay()); // should log: 'Fri'a
console.log(getDay()); // should log: 'Fri'a
console.log(getDay()); // should log: 'Fri'a
