/* 
1. include(): check if an element exists in an array, return true or false
2. indexOf(): check if an element exists in an array, return index value, if not found return -1
*/

// problem 1:
let fruitsArr = ["Apple", "Banana", "Mango", "Lichi"];
if(fruitsArr.includes("Mango")){
    console.log("Mango Ache");
}else{
    console.log("Mango nai, gache oth");
}

// problem 2:
let nameArr = ["Babul", "Alif", "Choton"];
let babulIndex = nameArr.indexOf("Babul"); // return index number
console.log("babul Index number is: ", babulIndex);

// problem 3:
let friendsArr = ["Rimon", "Rifat", "Rajib"];
let rifatIndex = friendsArr.indexOf("Rifat");
console.log("rifat Index number is: ", rifatIndex);

// problem 4:
let cityArr = ["Dhaka", "Chittagong", "Sylhet"];
console.log("cityArr: ", cityArr);
cityArr.push("rajshahi");
console.log("After add new city: ", cityArr);
let doesExistRajShahi = cityArr.includes("RajShahi"); // return true or false
console.log("RajShahi exist or not: ", doesExistRajShahi);


// problem 5:
let weatherArr = ["dighi", "megh", "bristi", "Borsha"];
console.log("weatherArr: ", weatherArr);
if(weatherArr.includes("bristi")){
    console.log("I need Umbrella");
}else{
    console.log("No rain no pain");
}

// problem 6:
let sprotsArr = ["Cricket", "Football", "Voliball"];
console.log("sprotsArr: ", sprotsArr);
let doesExistBadminton = sprotsArr.includes("Badminton"); // return true or false
if(doesExistBadminton){
    console.log("Badminton Ache");
}else{
    console.log("Badminton nai");
}