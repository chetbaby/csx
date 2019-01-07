let markTwainQuote = 'When we remember we are all mad, the mysteries disappear and life stands explained.';
let simpleArray = ['e',true,3,3,'d','e',3,6,'f','b','t','t',4,'d','y',77,'i']
let albertCamusQuote = 'Life is the sum of all your choices.'

// console.log(markTwainQuote.concat(' ' + albertCamusQuote + ' ' + simpleArray));
// let newQuote = markTwainQuote.concat(' ' + albertCamusQuote + ' ' + simpleArray);
// console.log(newQuote);
// console.log(typeof newQuote)
// console.log(newQuote.split(' '));
// let newQuoteArr = newQuote.split(' ')
// console.log(typeof newQuoteArr)
// console.log(newQuoteArr);
// console.log(newQuoteArr.length);
// console.log(typeof newQuote.split(' '));

console.log(markTwainQuote + ' ' + albertCamusQuote);

// FROM MDN
// If the arguments are not of the type string, !THEY ARE CONVERTED! to string values before concatenating.

// It is STRONGLY RECOMMENDED! that the assignment operators (+, +=) are used instead of the concat() method

// BEST: +
'Coucou ' + 'c\'est ' + 'nous !';
// SLOWER: .concat
'Coucou '.concat('c\'est ', 'nous !');
// SLOWEST: .join()
['Coucou ', 'c\'est ', 'nous !'].join();
