let output = '';
const rgh = 'hi there';
function repeater(char) {
  if (output.length === 5) { return output; }
  output += char;
  return repeater(char);
}

// console.log(rgh + ' random');
// console.log(rgh.length);
/* output.concat('k');
output.concat('k');
output.concat('k');
// console.log(output + 'k');
console.log(output);
 */

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g')); // should print 'ggggg'

/* Write a function that takes an input character and returns that character repeated 5 times using recursion by adding the input character to the variable output. For example, if the input is 'g', then output should be 'ggggg'.

Input: {String} char
Output: {String} */
