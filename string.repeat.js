const markTwainQuote = '     When we remember we are all mad, the mysteries disappear and life stands explained.     ';
const simpleArray = ['e', true, 3, 3, 'd', 'e', 3, 6, 'f', 'b', 't', 't', 4, 'd', 'y', 77, 'i'];
const simpleArray2 = ['lkajdlajdajl', 'lajdjalfdjaldk', 77, 'i'];
const albertCamusQuote = 'Life is the sum of all your choices.';
const serialCode = '45';
const simpleObject = { well: true, hi: 'there' };

// console.log(markTwainQuote.repeat(4) + 'maaaaannn, '.repeat(10));
// console.log(markTwainQuote.repeat(-``4));
// console.log(markTwainQuote.repeat(4.5));

// console.table(simpleObject);
// console.log(() => {markTwainQuote.includes('mad') => markTwainQuote.substr(5, 12)});

// const hasit = (str) => {
//   if (str.includes('mysteries')) {
//   const newArr1 = str.trim().padStart(str.length + 5, 'Dear sir or maddam ').split(' ');
//   console.log(newArr1);
// }
// };

console.log(ramsey = ['AbortSignal', 'way', 'hwhw'].splice('ham');)
console.log(ramsey.length);

const makeTwoStrArray = (str1, str2) => {
  const newArr = ((`${str1.trim()} ${str2.trim()}`)).split(' ');
  console.log(newArr);
  console.log(typeof newArr);
};

const makeTwoArrStr = (arr1, arr2) => {
  // if (arr2 = undefined) {
  //   arr2 = [];
  // }
  const newStr = (arr1 + arr2).replace(',', '');
  console.log(newStr);
  console.log(typeof newStr);
};

makeTwoStrArray(markTwainQuote, albertCamusQuote);
makeTwoArrStr(simpleArray, simpleArray2);
