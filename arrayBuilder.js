function arrayBuilder(obj) {
  var keysArr = Object.keys(obj),
    j
  valsArr = Object.values(obj),
    newArr = [];
  for (let key in obj) {
    for (let i = 0; i < obj[key]; i++) {
      newArr.push(key);
    }
  }
  return newArr;
};

console.log(arrayBuilder({
  cats: 2,
  dogs: 1
}));