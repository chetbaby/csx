/* phillip, instructor
variables are case sensitive
null:  means this variable does NOT reference ANYTHING. null is purposefully NOT initialized. the difference is that undefined is the default for JS.
NaN usually shows up when trying to perform arithmetic on non-numbers.
** means exponent. ex: { 2 ** 3 === 8 }
strings have indices and are immutable
+= is a re-initialize operator.
*/

// console.log("hello, world!");
const myArr =[1,1,,,2,3,4,5,5];
// console.log(myArr.reduce((acc, val)=>acc+=val,10))

// let myReduce = (arr, callback, initVal) => {
//     if (Array.isArray(arr) === true) {
//         let acc; //accumulator
//         if (initVal === undefined) {
//             acc = arr[0];
//         } else {
//             acc = initVal;
//         }
//         arr.forEach((el) => acc = callback(acc, el)); //curent val
//         //arr.forEach((el) => acc = callback(acc, el));
//         //console.log(acc)
//         return acc;
//         console.log('it\'s an array')
//     }
// }
// console.log(myReduce(myArr,(a,b)=> {return a + b}))







const myArr1 = [2,3,3,7,5,6]

// const myReduce = function(arr, callback, initVal) {
//     if (Array.isArray(arr)) {
//         let acc;
//         if (initVal === undefined) {
//             acc = arr[0]
//         } else {
//             acc = initVal
//         }
//         array.forEach(element => {callback(acc, element)}); 
//         return acc
//     }
// }

// const sumUp = (a,b) => {return a+b}
// console.log(myArr1.reduce (sumUp))
// //diff prob
// var firstCheck = false,
//     secondCheck = false,
//     access = firstCheck ? 'Access denied' : secondCheck ? 'Access denied' : 'Access granted';
  
// console.log(access)

/*const myReduce = (arr, callback, initVal) => {
    if (Array.isArray(arr)) {
        let acc;
        if (initVal = undefined) {
            acc = arr[0];
        } else {
            acc = initVal;
        }
        arr.forEach((el) => {
            acc = callback(acc, el)
        })
        return acc;
    }
}*/

// const myReduce = (arr, callback, initVal) => {
//     if (Array. isArray(arr)) {
//         let acc;
//     }
//     if (initVal === undefined) {
//         acc = arr[0];
//         arr = arr.slice(1);
//     } else {
//         acc = initVal;
//     }
//     arr.forEach((element) => {acc = callback(acc, element) 
//     })
//     return acc; 
// }

/*const myReduce = (arr, callback, initVal) => {
    if (Array.isArray(arr)) {
        let acc;
    }
    if (initVal === undefined) {
        acc = arr[0];
        arr = arr.slice(1);
    } else {
        acc = initVal;
    }
    arr.forEach((el) => {
        acc = callback(acc, el)}
    )
    return acc;
}*/

/*const myReduce = (arr, callback, initVal) => {
if (Array.isArray(arr)) {
        let acc;
    } if (initVal === undefined) {
        acc = arr[0];
        arr = arr.slice(1);
    } else {
        acc = initVal;
    } arr.forEach((el) => {acc = callback(acc, el)})
    return acc;
} */

/*const myReduce = (arr, callback, initVal) => {
    if (Array.isArray(arr)) {
        let acc;
    } if (initVal === undefined) {
        acc = arr[0];
        arr = arr.slice(1);
    } else {
        acc = initVal;
    } arr.forEach((el) => acc = callback (acc, el));
    return acc;
}
*/
const sumMe = (a, b) => {return a + b;}
const subtractMe = (a, b) => {return a - b}
// const avgIt = (a, b) => {return }
// console.log(myReduce(myArr, subtractMe))*/

/*const sayThis = (a) => { a = a || 'now this is awkward.';
return a;}
const playTron = 'how did this happen to me?'
console.log(sayThis(playTron))
console.log(sayThis())

/*const myReduce = (arr, callback, initVal) => {
    if (Array.isArray(arr)) {
        let acc;
    } if (initVal === undefined) {
        acc = arr[0];
    } else {
        acc = initVal;
    } arr.forEach((el) => { 
        acc = callback(acc, el)})
        //return acc;}) //this equals 'undefined
    return acc; //needs to be returned outside of the curly braces
}

console.log(myReduce(myArr, (a, b) => {return (a + b)}))
*/

/*
const people = [ { name: 'Susan', age: 31, hobbies: [ 'Turtle Racing', 'Eagle Cuddling' ] },
  { name: 'Tom', age: 52, hobbies: [ 'Cow Tipping', 'Cobra Charming' ] },
  { name: 'Mary', age: 19, hobbies: [ 'Donkey Staring', 'Baboon Sniffing' ] },
  { name: 'Gwynyth', age: 96, hobbies: [ 'Whale Whispering', 'Rabbit Painting' ] } ]

const pairs = [['name', 'Cbaby'],['age', '38'],['sex', 'male']]
console.log(people)
*/

//turn array into object
/*const randomObj = people.reduce((acc, val) => {
    acc[val[0]] = val[1];
    console.log(acc)
    return acc;
}, )
console.log(randomObj)*/

// console.log(people.filter(person => { person.name === 'Mary' }))

const myReduce = (arr, callback, initVal) => {
    if (Array.isArray(arr)) {
        let acc;
    } 
    acc = initVal || arr[0];    
    arr.forEach((el) => {
        acc = callback(acc, el)
    }) 
    return acc;
}

console.log(myReduce(myArr, sumMe))
