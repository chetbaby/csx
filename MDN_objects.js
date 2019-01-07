const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio() {
    alert(`${this.name[0]} ${this.name[1]} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`);
  },
  greeting() {
    alert(`Hi! I'm ${this.name[0]}.`);
  },
};

person.name = 'mildred';


const uranus = {
  type: 'planet',
  order: '7th',
  size: {
    radius: '25,362km',
    circumference: '159,354km',
    'surface area': '8.11 x 10^9km',
  },
  color: 'blue',
  satellites: '27',
};

const nameGen = name => `${name } McSmithy`;

let midterms = {};
const candidate = nameGen('mark');
const party = 'democrat';

midterms = {
  candidate,
  party,
};

// console.log(midterms);

const someString = 'hiroo!';
console.log('typeof someString[Symbol.iterator];', typeof someString[Symbol.iterator]);

const iterator = someString[Symbol.iterator]();
`${iterator}`; // "[object String Iterator]"

/*
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
console.log('iterator.next()', iterator.next()); // { value: "h", done: false }
*/
const arrTypeSample = [3, 4, true, 'james dean']
console.log('Object.prototype.toString.call(arrTypeSample)', Object.prototype.toString.call(arrTypeSample));
console.log(Array.isArray(arrTypeSample));