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

// replaceChar("Hello");

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

/*  Exercise 4
    ----------
    Write a JavaScript program to get the current
    date.
    Expected Output:
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

let getDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();

  let = currentDate = `${month}/${day}/${year}`;
  console.log(currentDate);
};

// getDate();

/* 
  Bubb's answer
  He had the same solution as I did, except without the .slice()
*/

/*  Exercise 5
    ----------
    Write a JavaScript program to create a new
    string, adding 'New!' in front of any given string.
    If the current string beings with 'New!' already
    then return the original string. 
*/

let addNew = (str) => {
  if (str.startsWith("New!")) {
    console.log(str);
  } else {
    console.log("New! " + str);
  }
};

// addNew("Shoes");

/* 
  Bubb's answer
  const addNew = (str) =>
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
*/

/*  Exercise 6
    ----------
    Write a JS program to create a new string from a given string
    taking the first 3 characters and the last 3 characters of a string
    and adding them together. The string length must be 3 or more,
    if not, the original string is returned
*/

let blendedString = (str) => {
  let strLength = str.length;
  // let firstThreeChar = str.slice(0, 3);
  // let lastThreeChar = str.slice(-3);

  if (strLength == 3) {
    console.log(str);
  } else {
    console.log(str.slice(0, 3) + str.slice(-3));
  }
};

// blendedString("123456abcdef");

/* 
  Bubb's answer
  const makeNewString = (str) => 
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3);
*/

/*  Exercise 7
    ----------
    Write a JS program to extract the first half of a 
    string of even length.
*/

let strHalf = (str) => {
  let x;
  if (str.length % 2 == 0) {
    x = str.length / 2;
  } else {
    x = str.length / 2 - 1;
  }
  let halfStr = str.substring(0, x);
  console.log(halfStr);
};

// strHalf("JavaScript");

/* 
  Bubb's answer
  const firstHalf = (str) => str.slice(0, str.length / 2)
*/

/*  Exercise 8
    ----------
    Write a JS program to concatenate two strings
    except their first character.
*/

let concatStr = (str1, str2) => {
  let newStr1 = str1.substring(1);
  let newStr2 = str2.substring(1);
  console.log(newStr1 + newStr2);
};

/* 
  Bubb's answer
  const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1)
*/

// concatStr("Hello", "World");

/*  Exercise 9
    ----------
    Given two values, write a JS program to find out 
    white one is nearest to 100
*/

let nearestNum = (num1, num2) => {
  if (num1 != num2) {
    let newNum1 = Math.abs(num1 - 100);
    let newNum2 = Math.abs(num2 - 100);

    if (newNum1 < newNum2) {
      console.log(num1);
    } else if (newNum1 > newNum2) {
      console.log(num2);
    }
  } else {
    console.log(false);
  }
};

/* 
  Bubb's answer
  const closestTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;
*/

// nearestNum(50, 50);

/*  Exercise 10
    ----------
    Write a JS program to check a given string contains
    2 to 4 occurrences of a specified character
*/

let checkOccurrences = (str, char) => {
  const regex = new RegExp(`${char}{2,4}`);
  return regex.test(str);
};

console.log(checkOccurrences("hpapyp", "p"));
