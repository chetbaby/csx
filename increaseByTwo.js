var increaseByTwo = [ 1, 2, 3, 4, 5 ] //.map(x => x + 2);
for (let i = 0; i < increaseByTwo.length; i++) {
  increaseByTwo[ i ] = increaseByTwo[ i ] + 2;
}

/* You are given an array of five numbers called increaseByTwo.Use a for loop to iterate through the array and increase each number by two. */
/* (function () {
  increaseByTwo.map(x => x + 2);
}()); */

/* function doIt() {
  increaseByTwo.forEach((el) => {
    increaseByTwo[ el ] = increaseByTwo[el] + 2;

  });
}
doIt(); */
// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];

var array1 = [ 1, 4, 9, 16 ];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
