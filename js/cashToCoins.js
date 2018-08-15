


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

var filtro=color.filter(function(color){
    return color.length==4;
})
console.log("filter",filtro);
var filters=[];
for(var i=0; i<color.length; i++){
        if(color[i].length===6){
      filters.push(color[i])
        }
}
    console.log("filters",filters);

    var number=[51, 24, 10, 9, 6];

    var sum=number.reduce(function(prev, curr){
        return (prev + curr);
    });
    console.log("sum reduce", sum);

    var sum1=0;
    for(var i=0; i<number.length; i++){
        sum1 += number[i];
       }
console.log("sum loop reduce", sum1);

var sentence=color.filter(function(word){
    return word.length>4;
}).reduce(function(previous, current){
    return previous +" " +current;
});
console.log("sentence",sentence);

var solsys=(function(){
    console.log("planets", solsys);
    var plar=[];
    var sol=0;
    plar.push=("ear", "jup","mar");
    sol.push=("sat","pla","ura");
    return {
        getPlanets:function(){
            return plar;
        }
    }
}
)
// console.log("planets",solsys);

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById('band');

// Get a reference to the appropriate DOM element for vegetables
// const veggieElement = document.getElementById('veggi');

// Execute a for loop that will iterate over the arrays
// for (let l = 0; l <bands.length; l += 1) {

//     // Get a reference to the current item in the bands array
//     const currentBand =[];
//    console.log("band",currentBand);
//     // Update the innerHTML value of the DOM element for bands

//     // Get a reference to the current item in the vegetables array
//     // const currentVeggie =

//     // Update the innerHTML value of the DOM element for vegetables
// };

var currentba=[];
for(i=0; i<bands.length; i++){
    //  console.log("new band",bands[i]);
     currentba.push(bands[i]);
//  let bandi=currentba[i];
//    currentba+=;
   bandElement.innerHTML +='<p>'+currentba[i];
}
// console.log(currentba);

var colores = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("veggi");

var rain='';
for(i=0; i<reindeer.length; i++){
    // console.log(reindeer[i]);
    rain+='<h6>'+ colores[i]+ ","+ reindeer[i];
    // console.log("rain",rain);
    // rain.push(reindeer[i]);
}
hohohoElement.innerHTML+=rain;
var value = 10;
switch (value) {
    case 1:
        console.log("Small number");
        break;
    case 5:
        console.log("Medium number");
        break;
    case 10:
        console.log("Large number");
        break;
    default:
        console.log("Dunno");
}

var today=new Date().getDate();
console.log("the day of today",today);
let day;
switch(new Date().getDay()){
    case 0:
    day ="sunday";
    break;
    case 1:
    day ="Monday";
    break;
    case 2:
    day ="Tuesday";
    break;
    case 3:
    day ="Wednsday";
    break;
    default:
    console.log("you did not finish writing the days");
}
console.log(day);

var animal="Dog";
switch(animal){
    case 'cow':
    case 'giraffe':
    case 'Dog':
    console.log('this animal will go');
    break;
    case'spoon':
    console.log("spoon is not an animal");
    break;
    default:
    console.log("this animal will not be in the ark");
}
// console.log (animal);