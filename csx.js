/* Examine the code given to you. Determine what arguments must be
passed into isX1 and isX2 respectively to obtain an output of true for
both, and pass in the arguments accordingly. */

const x = 3;

function isX1(num) {
  const x = 5;
  return num === x;
}

function isX2(num) {
  return num === x;
}

const one = isX1(5/* ADD CODE HERE */);
const two = isX2(3/* ADD CODE HERE */);
// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true

/* Examine the code given to you. Try to make the calls variable equal
to 'JerryKramerGeorgeElaine' with only a single invocation to the
function jerry */

let calls = "";

function jerry(str) {
  str += 'Jerry';
  return str;
}

function george(str) {
  str += 'George';
  return str;
}

function elaine(str) {
  str += 'Elaine'
  return str
}

function kramer(str) {
  str += 'Kramer';
  //george(str);
  return str
}
// nested function call from inside-out
console.log(elaine(george(kramer(jerry(``)))))

/* function jerry(str) {
  str += `Jerry`;
  function kramer() {
    str += `Kramer`;
    function george() {
      str += `George`;
      function elaine() {
        str += `Elaine`;
      }
    }
  }
  return str;
} */

// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);
console.log(calls)


/* Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

Hint- You have no gaurantee which number will be the bigger number, how
can you determine which is which? */

function getRemainder(num1, num2) {
  if (num1 > num2) {
    return num1 - (Math.floor((num1 / num2)) * num2);
  } else if (num2 > num1) {
    return num2 - (Math.floor((num2 / num1)) * num1);
  } else {
    return 0;
  };
}

//Uncomment the lines below to test your code

console.log(getRemainder(17, 5)); //=> 2
console.log(getRemainder(20, 5)); //=> 0
console.log(getRemainder(8, 22)); //=> 6
console.log(getRemainder(7, 42)); //=> 0

/* Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.

Hint- Remember that each character/letter in a string has an index
position that you can access with brackets- '[]' */

function lastLetter(word) {
  return word[ word.length - 1 ];
}

//Uncomment the lines below to test your code

console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"

/* Create a function gradeCalculator which takes a grade(number) and console.logs its letter grade.
grades 90 and above should return "A"
grades 80 to 89 should return "B"
grades 70 to 79 should return "C"
grades 60 to 69 should return "D"

59 and below should return "F" */

function gradeCalculator(grade) {
  if (grade >= 90) {
    return `A`;
  } if (grade > 79 && grade < 90) {
    return `B`;
  } if (grade > 69 && grade < 80) {
    return `C`;
  } if (grade > 59 && grade < 70) {
    return `D`;
  } if (grade < 60) {
    return `F`;
  }
}

//Uncomment the lines below to test your code

console.log(gradeCalculator(92)); //=> "A"
console.log(gradeCalculator(84)); //=> "B"
console.log(gradeCalculator(70)); //=> "C"
console.log(gradeCalculator(61)); //=> "D"
console.log(gradeCalculator(43)); //=> "F"

/* Write a function wereAwesome that takes you and your pair programming
partner's name and returns the a string of "[your buddy's name] and
[you] are awesome!" */

function wereAwesome(you, yourBuddy) {
  return `${yourBuddy} and ${you} are awesome!`;
}


//Comment in the code below to test your function:

console.log(wereAwesome("Dave", "Will")); //=> "Will and Dave are awesome!"
console.log(wereAwesome("Victoria", "Jenny")); //=> "Jenny and Victoria are awesome!"
console.log(wereAwesome("Chris", "Jac")); //=> "Jac and Chris are awesome!"
console.log(wereAwesome("Phillip", "Skyler")); //=> "Phillip and Skyler are awesome!"

/* Write a function disemvowel that takes in a string and returns a new
string with all vowels removed. */

function disemvowel(string) {

}

//Comment in the code below to test your function:

console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

/* Write a function arrayBuilder that takes in a count object and
returns an array filled with the appropriate numbers of elements. The
order of the elements in the array does not matter, but repeated
elements should be grouped.
 */

function arrayBuilder(obj) {
  // your code here...

}

//Comment in the code below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []