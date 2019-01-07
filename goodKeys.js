const goodKeys = (obj, callback) => {
  const keysArray = [];
  for (const prop in obj) {
    console.log(obj[prop]);
    if (callback(obj[prop]) == true) {
      keysArray.push(prop);
    }
  }
  return keysArray;
};


// ADD CODE HERE

// Uncomment these to check your work!
const sunny = {
  mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog',
};
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; }
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
