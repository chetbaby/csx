const objOfMatches = (arr1, arr2, callback) => {
  const newObj = {};
  // let acc = {};
  arr1.forEach((el) => {
    // console.log(arr1.indexOf(el))
    // console.log(newObj)
    // console.log(callback(el));
    // for (i =0; i < arr1.length; i++) {
    // if (callback(el) === arr2[i]) {
    if (callback(el) === arr2[arr1.indexOf(el)]) {
      // console.log(arr2[i]);
      // console.log(callback(el));
      // console.log('hirhhh');
      newObj[el] = arr2[arr1.indexOf(el)];
    }
    //  console.log(newObj[el]);
    console.log(newObj);
    // }
  });
  return newObj;
}
// INPUT: parameters- array1, array2 & callback
// OUTPUT: new object
// CONDITIONAL: test array1 elements (forEach) !!does element match element (same [i]) of array2.
// Uncomment these to check your work!
let arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
let arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];

function uppercaser(str) {
  return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
// console.log(arr2)