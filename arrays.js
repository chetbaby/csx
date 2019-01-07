let femaleArr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
let arrOfArr = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
]
let numArr = [4, 6, 2, 5, 8, 9, 2, 3, 2, 5, 3, 7, 10, 4, 16, 32, 44, 3, 1, 6]
let objOfArr = {
    "name": "John",
    "age": 30,
    "cars": [{
            "name": "Ford",
            "models": ["Fiesta", "Focus", "Mustang"]
        },
        {
            "name": "BMW",
            "models": ["320", "X3", "X5"]
        },
        {
            "name": "Fiat",
            "models": ["500", "Panda"]
        }
    ]
}
let employeeData = [
    [
        ['firstName', 'Joe'],
        ['lastName', 'Blow'],
        ['age', 42],
        ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
        ['role', 'manager']
    ]
]

/*const transformEmployeeData = (array) => {
    let newArr = {};
    for(let data of array) {
        console.log(data)
    }
}*/

function transformEmployeeData(array) {
    for (let i = 0; i < array.length; i++) {
        let subArray = array[i];
        for (let j = 0; j < subArray.length; j++) {
            console.log(j)
        }
    }

    console.log(transformEmployeeData(employeeData))
    //console.log(employeeData[0][0][0])

    /*const transformFirstAndLast = (array) => {
    //your code here
    let newObj = {};
    newObj[array[0]] = array[array.length - 1];
    return newObj;
  }
console.log(transformFirstAndLast(femaleArr))*/

    /* const fromListToObject = (array) => {
        // your code here
        let newObj = {};
        for(let a of array) {
            newObj[a[0]] = a[1]
            //console.log(a.slice(1))
            console.log(newObj)
        }
        return newObj
     }

    console.log(fromListToObject(arrOfArr))*/

    /*console.log(arrOfArr.splice(1))
    console.log(femaleArr.map((tic) => {
        return tic + ' is the sheit!'}))
    console.log()
    console.log(numArr.reverse())
    //console.log(arrOfArr.forEach.push)
    const norw = (array) => {
        let newArr =[];
        array.forEach( (el) => {newArr = newArr.push(el)
            ;console.log(el)
    }); console.log( newArr)
    }
    norw(arrOfArr)


        newArr
        console.log(femaleArr.find('Queen'))*/
    document.console
    newArr
    newArr