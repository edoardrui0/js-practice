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

console.log(checkNum(50, 50));
console.log(checkNum(50, 49));
console.log(checkNum(99, 1));
console.log(checkNum(25, 49));
