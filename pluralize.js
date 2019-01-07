// take in an array of strings and 's' to each string in the input array. employ a loop

// INPUT: array
// OUTPUT: same array, same number of indices, just added 's' to strings
// loop through each index
// check if index === string
// if string add 's'
// if not string, go to next index

const addLetterS = (arr) => {
  const newArr = [];
  for (const i of arr) {
    newArr.push(`${i }s`);
  }
  return newArr;
};

console.log(addLetterS(['dog', 'cat', 'donkey']));
