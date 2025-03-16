// problem 1
let myEarnMoney = 100;
let spendMoney = 40;
let remainingMoney = myEarnMoney - spendMoney;
console.log(`Remaining Money: ${remainingMoney} tk`);

// problem 2
let havePencils = 10;
let usePencilsOneTime = 2;
let useTimes = havePencils / usePencilsOneTime;
console.log(`How many times use pencils: ${useTimes} times`);

// problem 3
let haveMoney = 60;
let spendMoneyOneTime = 15;
let spendTimes = haveMoney / spendMoneyOneTime;
console.log(`How many times spend money: ${spendTimes} times`);

// problem 4
let str1 = "Hello";
let str2 = "World";
let finaleStr = str1 + " " + str2; // concatenation
console.log(finaleStr);

// problem 5
let buyRiceKg = 153;
let buyDalKg = 261;
let totalBuyThingsInKg = buyRiceKg + buyDalKg;
console.log("totalKg: ", totalBuyThingsInKg);

// problem 6
let haveTotalAmount = 500;
let spendAmount = 75;
let timesSpent = Math.floor(haveTotalAmount / spendAmount); // Math.floor
let remainingBalance = haveTotalAmount % spendAmount;
console.log(`timesSpent: ${timesSpent} times`);
console.log(`remainingBalance: ${remainingBalance} tk`);

// problem 7
let dividend = 8;
let divisor = 3;
let quotient = dividend / divisor;
let remainder = dividend % divisor;
console.log("quotient: ", quotient.toFixed(2));
console.log("remainder: ", remainder);

// problem 8
let num1 = 50;
let num2 = 9;
let numRemainder = num1 % num2;
console.log("numRemainder: ", numRemainder);

// problem 9
let firstWord = "Bangla";
let lastWord = "desh";
let fullWord = firstWord + lastWord;
console.log("fullWord: ", fullWord);

// problem 10
let totalRiceKg = 480; // Given, 12 mon = 480 kg
let riceConsume = 4; // Given, 1 day = 4 kg
let totalDaysNeed = totalRiceKg / riceConsume;
let totalMonth = totalDaysNeed / 30; // 1 month = 30 days
console.log("totalDaysNeed: ", totalDaysNeed);
console.log("totalMonth: ", totalMonth);




