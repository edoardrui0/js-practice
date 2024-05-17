// these tasks come from https://javascript.info/object#ordered-like-an-object

let user = {};
user.name = `John`;
user.surname = `Smith`;
user.name = `Pete`;
delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
};

// Should work like this:

// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule)); // false

/*
    my personal thoughts on this
    at first i didn't understand the looping method, i tried a basic conditional statement
    now its very clear. the 'key' is to check for properties.
    I get the key and properties mixes, sometimes think its for something else
    suggestion to switch 'key' for 'prop' in the future
 */

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let prop in salaries) {
  sum += salaries[prop];
}

// console.log(sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

let multiplyNumeric = (obj) => {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] = obj[prop] * 2;
    }
  }
  return obj;
};

console.log(menu);
console.log(multiplyNumeric(menu));
