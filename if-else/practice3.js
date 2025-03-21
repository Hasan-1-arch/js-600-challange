/* if-else_if-else */

// problem1
let price = 4500;
if(price >= 3000){
    let discount = 3000 * 0.05;
    let pay = price - discount;
    console.log(pay);
}else if(price >= 6000){
    let discount = 6000 * 0.15;
    let pay = price - discount;
    console.log(pay);
}else{
    let pay = price;
    console.log(pay);
}


// problem2:
let payForFood = 5000;
let customerAge = 20;
if(customerAge <= 12){
    console.log("All are free");
}else if(customerAge >= 60){
    let discount = payForFood * 0.5;
    let payment = payForFood - discount;
    console.log(payment);
}else{
    let payment = payForFood;
    console.log(payment);
}

// problem3:
let accountBalance = 10000;
if(accountBalance < 1000){
    console.log("please deposit");
}else if(accountBalance >= 1000 && accountBalance <= 5000){
    console.log("Bindas Life, Enjoy ")
}else if(accountBalance > 5000){
    console.log("You are rich, let's party");
}


// problem4:
let studentMarks = 80;
if(studentMarks < 50){
    console.log("Fail");
}else if(studentMarks >= 50 && studentMarks <= 80){
    console.log("Pass");
}else if(studentMarks > 80){
    console.log("A+");
}

// problem5:
let bookPageNum = 200;
if(bookPageNum < 100){
    console.log("Small Book");
}else if(bookPageNum >= 100 && bookPageNum <= 500){
    console.log("Mid-Size Book");
}else if(bookPageNum > 500){
    console.log("Heart-attack size book");
}

// problem6:
let temperature = 2;
if(temperature < 0){
    console.log("Ice")
}else if(temperature >= 0 && temperature <= 20){
    console.log("Cool Cool");
}else if(temperature > 20){
    console.log("Hot Hot");
}

// problem7: 
let playerLabel = 5;
if(playerLabel < 10){
    console.log("novice");
}else if(playerLabel >= 10 && playerLabel <=50){
    console.log("Expert");
}else if(playerLabel > 50){
    console.log("Pro Gamer");
}