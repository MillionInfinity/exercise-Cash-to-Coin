


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
var h12=document.getElementsByTagName('h1');
console.log("h1", h12[0]);
// .innerHTML=piggyBank.pennies;
h12[0].style.color="black";

var fruit = ["cherries", "apples", "bananas", "Man2go"];
console.log(fruit);
var fruits = "watermelon|lemon|orange";
var fruitstr= fruit.sort().reverse();
var spli=fruit.splice(4, 1,'million');
var len =fruit.length;
console.log("sort",fruitstr);
console.log('splice',spli);
var num =[10, 15, 13, 2, 3, 4, 5, 6]
var nums=num.sort();
var numb=num.sort(function(first, second){
    return (first-second) 
})
// )
console.log("nums",nums);
fLen = fruit.length;
console.log("flen",fLen);
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
 
}
console.log("i", i)
var color=["red", "blue", "greeen", "million"];
 var printcolor=color.join(",");
 var slicecolor=color.slice(1 ,2);
 var splitcolor=printcolor.split(' ');
 var indexof=color.indexOf("million");
 console.log("join",printcolor);
//  console.log("slice", slicecolor);
 console.log("split",splitcolor);
//  console.log("indexof",indexof);


splitcolor.forEach(function(color){
    console.log("loop",color)
})

for(let i=0; i<splitcolor.length; i++){
    console.log("forLoop",splitcolor[i])
}
 console.log("color",color);
 var reversed=color.map(function (color) {
    // console.log("map", color)
    return color.split('').reverse().join('');
})
console.log("reversemap",reversed)

var reversed=[];
for (let i = 0; i < splitcolor.length; i++) {
    console.log("reverseLoop", splitcolor[i])

      var colorn=splitcolor[i].split('').reverse().join('');
         reversed.push(colorn);
}
console.log("map", reversed)