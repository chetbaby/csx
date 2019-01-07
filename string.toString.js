let markTwainQuote = '     When we remember we are all mad, the mysteries disappear and life stands explained.     ';
let simpleArray = ['e',true,3,3,'d','e',3,6,'f','b','t','t',4,'d','y',77,'i']
let albertCamusQuote = 'Life is the sum of all your choices.'
let serialCode = '45'
let simpleObject = {well: true, hi: 'there'}

// console.log( simpleArray.toString());
// console.log(typeof simpleArray);
// console.log(simpleObject.toString()); // doesn't seem to work on objects. it will say the typeOf is 'string' but won't print out the string.
console.log(String(simpleObject));
console.log(String(simpleObject));
let strungJ = JSON.stringify(simpleObject)
console.log(strungJ);
console.log(typeof strungJ);
console.log(typeof simpleObject);
// let convertedObj = simpleObject.toString()

// console.log(simpleObject);