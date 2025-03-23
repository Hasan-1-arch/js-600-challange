/* 
1. push(): add new element at the end
2. pop(): remove last element
4. unshift(): add new element at the beginning
3. shift(): remove first element
*/

// problem 1:
let numArr = [10, 20, 30, 40, 50];
console.log("numArr: ", numArr);
numArr.push(60); // add new element at the end
console.log("Update numArr: ", numArr);

// problem 2:
let friendsArr = ["Sajib", "Sagor", "Sakib", "Sohel"];
console.log("friendsArr: ", friendsArr);
friendsArr.push("Sumon"); // add new element at the end
console.log("Update friendsArr: ", friendsArr); // After adding new element at the end

// problem 3:
let MobileGameArr = ["FreeFire", "PUBG", "candyCrush", "TempleRun"];
console.log("MobileGameArr: ", MobileGameArr);
MobileGameArr.pop(); // remove last element
console.log("Update MobileGameArr: ", MobileGameArr); // After removing last element

// problem 4:
let givenArr = [24, 36, 48, 60];
console.log("givenArr: ", givenArr);
givenArr.unshift(12); // add new element at the beginning
console.log("Update givenArr: ", givenArr);

// problem 5:
let bookArr = ["The Alchemist", "The Lord of the Rings", "The Hobbit", "The Silmarillion", "JavaScipt"];
console.log("bookArr: ", bookArr);
console.log("Total Books: ", bookArr.length);
bookArr.shift(); // remove first element
console.log("Update bookArr: ", bookArr);