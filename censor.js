// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

const censor = () => {
  const firstStr = [];
  const secondStr = [];
  return (...args) => {
    if (args.length === 2) {
      firstStr.push(args[0]);
      secondStr.push(args[1]);
    }
    if (args.length === 1) {
      let newStr = args[0];
      for (let i = 0; i < firstStr.length; i += 1) {
        const sRegExInput = new RegExp(firstStr[i], 'g');
        const sRegExOutput = new RegExp(secondStr[i]);
        newStr = (newStr.replace(sRegExInput, sRegExOutput)).replace(/[\/]/g, '');
      }
      return newStr;
    }
  };
};

// const play = censor();
// play(12, 23);
// play('world', 'pretty');
// play('wayne', 'gretzky');
// play("wayne's 12 world! wayne's world! wayne's world!");

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
censor();