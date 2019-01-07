function getLength(array, counter = 0) {
  if ((array.toString()) === '') { return counter; }
  counter++;
  array.pop();
  return getLength(array, counter);
}


// const bar = [4543, 2343];
// console.log('bar.pop()', bar.pop());
// console.log(bar.toString());

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

/* Get the length of an array using recursion without accessing its length property.

Input: {Array} array - array whose length is sought
Output: {Number} */
