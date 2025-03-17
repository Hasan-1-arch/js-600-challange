/*  */

// problem1:
let num = '20';
console.log("num: ", num);
let sum = parseInt(num) + 10; // parseInt(): convert string to number
console.log("sum: ", sum);

// problem2:
let givenNum = 3.14159;
let convertToInt = parseInt(givenNum);
console.log("convertToInt: ", convertToInt);

// problem3:
let givenString = "premikBoy";
let convertToNum = parseInt(givenString);
console.log("convertToNum: ", convertToNum);

// problem4:
let givenNum1 = 3.456;
let givenNum2 = 2.789;
let sumOfNum = givenNum1 + givenNum2;
console.log("sumOfNum: ", sumOfNum.toFixed(2)); // toFixed(): 2 precision number After decimal point.

// problem5:
let str1 = '56.789';
let str2 = '12.34';
let sumOfStr = parseFloat(str1) + parseFloat(str2);
console.log("sumOfStr: ", sumOfStr.toFixed(2));

// problem6:
let newStr1 = '10.5678';
let newStr2 = '5.4321';
let sumOfNewStr = parseFloat(newStr1) + parseFloat(newStr2);

console.log("sumOfNewStr: ", sumOfNewStr.toFixed(1));

// problem7:
let strNumber = '42.45689754';
let roundedNumber = parseFloat(strNumber).toFixed(3);
let finalNumber = parseFloat(roundedNumber);
console.log("roundedNumber: ", roundedNumber); // string
console.log("finalNumber: ", finalNumber); // Integer | number