let markTwainQuote = 'When we remember we are all mad, the mysteries disappear and life stands explained.';
let simpleArray = ['e',3,3,'d','e',3,6,'f','b','t','t',4,'d','y',77,'i']

// console.log(markTwainQuote);
// // console.log(markTwainQuote.match('are'));
let guyRitchie = markTwainQuote.match('are')
console.log(guyRitchie);
console.log(typeof guyRitchie);
console.log(guyRitchie.length);
console.log(guyRitchie[0] + ' is what you get.');
// console.log(markTwainQuote.match().length); // returns 1
// console.log(typeof markTwainQuote.match()); // returns object

// FROM MDN

// If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

//The returned Array has an extra input property, which contains the original string that was parsed. In addition, it has an index property, which represents the zero-based index of the match in the string.

// var str = 'For more information, see Chapter 3.4.5.1';
// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);

// console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match. (index of start of match from within the passed string)
// The 'input' property is the original string that was parsed.
// END FROM MDN