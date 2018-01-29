


const dollarAmount = .010;
const piggyBank = {}
coinValue={quarters:0.25, dimes:.1, nickels:0.05, pennies:0.01}
// Your magic code here
var remainQuarters = dollarAmount % 25;
var newQuarters = dollarAmount - ((coinValue.quarters) * 25);
piggyBank.quarters = Math.floor((remainQuarters)/(coinValue.quarters));
//=======
var remainderDimes = dollarAmount % 10;
var newDimes = dollarAmount - ((coinValue.quarter) * 10);
piggyBank.dimes =Math.floor((remainderDimes)/(coinValue.dimes));
//=======
var remainderNickels = dollarAmount % 5;
var newNickels = dollarAmount - ((coinValue.dimes) * 5);
piggyBank.nickels = Math.floor((remainderNickels) / (coinValue.nickels));
//=======
var remainderPennies = dollarAmount % 1;
var newNickels = dollarAmount - ((coinValue.pennies) * 1);
piggyBank.pennies = Math.floor((remainderPennies) / (coinValue.pennies));

// End my code
console.log(piggyBank);