


const dollarAmount = 0.73;
const piggyBank = { quarters:0, dimes:0, nickels: 0, pennies: 0}
var coinValue = dollarAmount * 100; //converting to the one dollar amount instead of using digits.
//console.log(coinValue);
var quarters=0;
//my magic unicorn code is here
if (coinValue>=25){                           //if it is greater or equal 25
    var myQ=coinValue/25;                     //lets divide with the Q value
    piggyBank.quarters= Math.floor(myQ);      // i rounded down
    var quarters = Math.floor(myQ) * 25;      //i multiply the new value with the constant value of the Quarter to get the rounded multiple of 25.
    var qRemainder = coinValue - quarters;    //calculating the remainder
    //console.log(qRemainder);

//======
     var myD =qRemainder/10; // i bring the the remainder from the quarter
     piggyBank.dimes=Math.floor(myD);
     var dimes = Math.floor(myD)*10;
     var dRemainder =qRemainder- dimes;
     //console.log(dRemainder);

//==============

    var myN =dRemainder/5;
    piggyBank.nickels=Math.floor(myN);
    var nickels =Math.floor(myN)*5;
    var nRemainder =dRemainder - nickels;
    //console.log(nRemainder);


//=========

    var myP = nRemainder;    //the remainder from the nickels are the pennies.
    piggyBank.pennies=myP;
    //console.log(piggyBank.nickels);
}
console.log(piggyBank);