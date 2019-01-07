let tempPhrase = 'hey guys what are you doinBBBBg here?';
let simpleArray = ['e',3,3,'d','e',3,6,'f','b','t','t',4,'d','y',77,'i']

// console.log(typeof tempPhrase.split()); //returns object
// console.log(tempPhrase.split().length); //returns 1
// console.log(tempPhrase.split('').length); //returns 37
// console.log(tempPhrase.split(' ').length); //returns 7
// console.log(tempPhrase.split(' ')); //removes the spaces
// console.log(typeof tempPhrase); // returns string

function sentenceBreaker (str) {
  return str.split(' '); // remember the `return` statement
}

console.log(sentenceBreaker(tempPhrase));

// console.log(tempPhrase);
// console.log(simpleArray);
// console.log(tempPhrase.split('', tempPhrase.length - 4));
// console.log(tempPhrase.split('', tempPhrase.length / 2));
// console.log(tempPhrase.split('are', 4));
//console.log(typeof tempPhrase.split(''));

/* function turnStringIntoArray(str) {
  return str.split('');
} */


























/* function countInArray (array, x) {
  let countArray = array.filter(el => el === x);
  console.log(countArray.length)
} */

//tempPhrase.slice()

//countInArray((turnStringIntoArray(tempPhrase)), 'B') // this didn't work like i thought it would. the called function didn't act as an array

// let jesus = simpleArray.filter(word => word === 3)
// console.log(jesus.length);