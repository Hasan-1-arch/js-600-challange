/* 
1. Define Array(number, string), 
2. Access Array elements by index,
3. Update Array Any elements by index,
*/

// problem 1:
let friendArr = ["Kamal", "Nayeem", "Shahid", "Shakil", "Shakil", "Shakil", "Shakil", "Shakil", "Shakil", "Shakil"];
console.log("Total friends: ", friendArr.length);
console.log("friends: ", friendArr);
console.log("who occupies 3rd position: ", friendArr[3]);

// problem 2:
let bookArr = ["The Alchemist", "The Lord of the Rings", "The Hobbit", "The Silmarillion", "The Silmarillion", "The Silmarillion", "The Silmarillion", "The Silmarillion", "The Silmarillion", "The Silmarillion"];
console.log("Total Books: ", bookArr.length);
console.log("bookArr: ", bookArr);
console.log("my 5th favorite book: ", bookArr[5]);

// problem 3:
let numArr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
numArr[7] = 30; // update value of index 7
console.log("numArr: ", numArr);

// problem 4:
let gameArr = ["FreeFire", "PUBG", "candyCrush", "TempleRun"];
gameArr[2] = "SubwaySurfer"; // update value of index 2
console.log("gameArr: ", gameArr);

// problem 5:
let familyMemberArr = ["John", "Jane", "Jack", "Jill", "Joe"];
console.log("3rd position member: ", familyMemberArr[3]);

// problem 6:
let countryArr = ["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan", "Maldives", "Sri Lanka", "Thailand", "Myanmar", "Vietnam"];
console.log("Countries: ", countryArr);
console.log("4th country: ", countryArr[4]);

// problem 7:
let studyTableAccessoriesArr = ["pen", "pencil", "notebook", "ruler"];
console.log("Total Accessories: ", studyTableAccessoriesArr.length);
console.log("7th Accessories: ", studyTableAccessoriesArr[7]); // undefined, because index is out of range and no value defined
