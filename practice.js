/*  
    Exercises were followed along this Youtube video
    https://www.youtube.com/watch?v=N65RvNkZFGE&t=77s 
*/

/*  Exercise 1
    ----------
    Write a JavaScript program to check two 
    numbers and return true if one of the number
    is 100 OR if the sum of the two numbers is 100
*/

// my answer
let checkNum = (num1, num2) => {
  let sum = num1 + num2;
  if (num1 == 100 || num2 == 100 || sum == 100) {
    return true;
  } else {
    return false;
  }
};

/*
    Bubb's answer
    let checkNum = (num1, num2) => num1 == 100 || num2 == 100 || num1 + num2 == 100;
*/

/*  Exercise 2
    ----------
    Write a JavaScript program to get the
    extension of a filename
*/

//  my answer
//  need to work on naming the functions, along with cleaner code
let extName = (fileName) => fileName.split(".").pop();

/*
  Bubb's answer
  const getFileName = (str) => str.slice(str.lastIndexOf("."));
  this will generate the extension name plus the '.' before the name
*/

/*  Exercise 3
    ----------
    Write a JavaScript program to replace every
    character in a given string with the character 
    following it in the alphabet
*/

// Look for charCodeAt(), charAt() and fromCharCode()

let replaceChar = (str) => {
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    let splitArr = str.split("");
    let charCode = splitArr[i].charCodeAt();
    newArr.push(charCode);
  }

  /*
  tried something new here with .match(). While it did work for the most part, 
  it broke my code when trying to do 2 digit numbers and would force it to be 3 digit
  by taking a digit from the next number and adding it to the previous
  let regex = /.{2,3}/g;
  let newArr = regexArr.match(regex).map(Number);
  console.log(newArr);
  */

  let charCodeArr = [];
  let newStr = "";

  for (let i = 0; i < newArr.length; i++) {
    charCodeArr.push(newArr[i] + 1);
    newStr += String.fromCharCode(charCodeArr[i]);
  }

  console.log(newStr);
};

replaceChar("Hello");

/* my main observation from this exercise is that i overcomplicated things, but that's to be expected at my skill level
  Bubb's answer
  const moveCharsForward = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt
    (0) + 1))
    .join('');
  console.log(moveCharsForward('hello'))
*/
