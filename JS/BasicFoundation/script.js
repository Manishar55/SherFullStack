
//-----------------------------------DAY 2----------------------------------------------------------------------

//Type Coersion -> Automatic conversion of data from one datatype to another datatype
//Implicit
//Explicit

var a = '10';
var b = '30';
console.log(a*b);
console.log(a+b); //concatenation

var a2 = Number(a);
console.log(typeof(a2)); //explicit type conversion

var num=13;
var num2 = String(num);
console.log(typeof(num2));

// var x = Number(prompt('Enter 1st NUmber')); //10
// var y = Number(prompt('Enter 2st NUmber')); //20
// console.log(x+y); //30


//Binary operators - Requires exactly two operands to perform an operation
//Arithmatic (+, -, *, %, /)
//Assignment (a=b)
//Comparision (==, >=, <=, >, <)
//Increment & decrement (a++, b--)
//Logical (&&, ||, ??)

//Falsy values -> false, 0, "", '', null, undefined, NaN
//Truthy values -> Everything is truthy values including "0", "false", [], {}

if([]){
    console.log("True");
}
else{
    console.log('False');  
}


var s=100;

switch(true){
    case (s<=10):
        console.log("done");
        break;
    case (s>=10):
        console.log("Not done");
        break;
    default: console.log("all done");    
}

//---------------------------------------DAY 3--------------------------------------------------------------------------
// do{
//     var pass=prompt('Enter Password')
// }while(pass!= '123')

console.log('Welcome');
    
var s= 10; //var is a global variable and it will add into window object in the browser, which may cause issue in production
//so can use let and const
console.log(window);

//var - Value updation, function scoped
//let - Value updation, block scope
//const - No Value updation, block scope


//inbuild funtions
t='Hii there'; //hoisting

console.log(t.toUpperCase());
console.log(t.indexOf('e'));
console.log(t.includes("Hii"));
console.log(t.slice(0, 3));
console.log(t.substring(2, 7));
console.log(t.replace("Hii", "Hello"));
console.log(t.split(", "));
console.log("  Yoooo  ".trim());
console.log("abc".repeat(4));
console.log(t.startsWith("Hii"));
console.log(t.endsWith("!"));
console.log(t.charAt(5));

console.log(t.slice(0, -7));//Hi -> //it also counts backward from the end of the string (7 to 0)

var t;

//useful number method

let n = 3.14159;
console.log(n.toFixed(3)); //"3.141" //returns string
console.log(Number("65")); //65
console.log(Number("42abc")); //NaN
console.log(parseInt("42px7")); //42  //parse what it can
console.log(parseFloat("3.14kg"));//3.14
console.log(isNaN("hii")); //true
console.log(Number.isInteger(4)); //true
console.log(Number.isInteger(3.6)); //false

//The math object

console.log(Math.PI); //3.14159...
console.log(Math.E); //2.7182...
console.log(Math.round(3.5765)); //4
console.log(Math.floor(3.67)); //3 //always rounds down
console.log(Math.ceil(3.165));//4 //always rounds up
console.log(Math.abs(-8)); //8
console.log(Math.max(3, 6, 7, 1)); //7
console.log(Math.min(2, 3, 4, 1)); //1
console.log(Math.pow(2, 10)); //1024
console.log(Math.sqrt(16)); //4
console.log(Math.random()); //0.76... //random number between 0 and 1


