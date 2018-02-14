


const dollarAmount = 1.25;
const piggyBank = { quarters:0, dimes:0, nickels: 0, pennies: 0}
var coinValue = dollarAmount * 100; //converting to the one dollar amount instead of using digits.
//console.log(coinValue);

//my magic unicorn code is here
if (coinValue>=25){
    var newQuarters=coinValue/25;
    piggyBank.quarters= Math.floor(newQuarters);
    console.log(piggyBank);
    var quarters=Math.floor(coinValue.quarters) * 25;
    console.log(quarters);
};
//======
//var remainderDimes = dollarAmount % 10;
//var newDimes = dollarAmount - ((coinValue.quarter) * 10);
//piggyBank.dimes =+Math.floor((remainderDimes)/(coinValue.dimes));
//=======
//var remainderNickels = dollarAmount % 5;
//var newNickels =+ dollarAmount - ((coinValue.dimes) * 5)
//piggyBank.nickels = Math.floor((remainderNickels) / (coinValue.nickels));
//=======
//var remainderPennies = dollarAmount % 1;
//var newNickels =+ dollarAmount - ((coinValue.pennies) * 1);
//piggyBank.pennies = Math.floor((remainderPennies) / (coinValue.pennies));

// End my code
//console.log(piggyBank);
