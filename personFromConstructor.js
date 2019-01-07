/* Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method. */

function PersonConstructor() {
  this.greet = function () {
    console.log('hello');
  };
  this.introduce = function () {
    console.log(`Hi, my name is ${  this.name}`);
  };
}

function personFromConstructor(name, age) {
  // add code here
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}


const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

/* Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]". */
