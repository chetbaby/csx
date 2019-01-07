/*  INPUT: 2 arrays.
    array1 = values
    array2 = callbacks
    OUTPUT: object whose KEYS match array1 VALUES
            each KEY = [newOutputs of CALLBACKS from array2, using each KEY as the newInput] in array form
            return {
                arr1[0]: 'return value of arr2[callback(arr1[0])],
                arr1[1]: 'return value of arr2[callback(arr1[1])],
                arr1[2]: 'return value of arr2[callback(arr1[2])],
                ...
            }*/

const multiMap = (itemArr, funcArr) => {
    let calcObj ={};
    itemArr.forEach((el1) => {
        calcObj[el1] = funcArr.map((el2) => el2(el1));
    });
    return calcObj
}
        //[funcArr[itemArr.indexOf(el)](el)];

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
var items = ['catfood', 'glue', 'beer'];
var functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// functions[0]
//console.log('functions', functions[0]('eeeeep'));
