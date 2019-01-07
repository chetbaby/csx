const prioritize = (arr, callback) => {
  const result = [];
  arr.forEach((el) => {
    if (callback(el)) {
      result.unshift(el);
    } else {
      result.push(el);
    }
  });
  return result;
};


function startsWithS(str) { return str[0].toLowerCase() === 's'; }
let tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
