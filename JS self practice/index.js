
// Spread (...) → Expands values
// Rest (...) → Collects values
//------passing multiple arguments to a function using spread operator
const arr1=[1, 2, 3];
const arr2=[5, 6, 7];

function sum(a, b, c){
    console.log(a+b+c);
}
sum(...arr2);


//------Rest operator example
function display(a, b, ...restArguments){
    console.log(a);
    console.log(b);
    console.log(restArguments);
}
display(1, 2, 3, 4, 5);


//--------find method
let find = arr1.find((num)=>num%2==0);
console.log(find);


//--------filter method
let filter = arr1.filter((num)=>num%2!=0);
console.log(filter);


//-----map method
let arr=[2, 3, 6, 7, 8, 9];
let mappedArr=arr.map((e)=>e*2);
console.log(mappedArr);


//-----forEach method
let nums=[2, 5, 7, 9, 10, 12, 13];
nums.forEach((e) =>{
  console.log(e * 2);
});
console.log(nums);

//------if you want to modify the same array using forEach
let nums2 = [2, 3, 6, 7, 8, 9];

nums2.forEach((e, i) => {
  nums2[i] = e * 2;
});
console.log(nums2);


//-------concat method
let arr3=[5, 6];
//arr3.concat(7, 8);  //it will not modify the original array it'll create a new array
let arr4= arr3.concat(7, 8); 
console.log(arr4);


//--------splice() method
let letters=['a', 'b', 'c', 'd'];
letters.splice(0, 0, 'q', 'r');
console.log(letters);


//--------split() is a string method used to break a string into an array based on a separator.
let str="I am Manisha";
let res=str.split(" ");
console.log(res); //[ 'I', 'am', 'Manisha' ]

let str1 = "apple,banana,mango";
let result = str1.split(",");
console.log(result); // ["apple", "banana", "mango"]

let str2 = "a,b,c,d";
let result1 = str2.split(",", 2);
console.log(result1); // ["a", "b"]


//--------array destructuring
const fruits=['apple', 'mango', 'banana'];
const[first, second, third]=fruits;
console.log(first);
console.log(second);
console.log(third);


//--------array like objects
//strings, arguments, HTML collections

//strings
const str3="Hello";
console.log(str3[2]);

//arguments object
sum(2, 3, 5);
function sum(){
  console.log(arguments); //[Arguments] { '0': 2, '1': 3, '2': 5 }
  console.log(arguments.length); //3
  console.log(arguments[0]); //2
}


//-------convert array like objects into array
//using Array.from()
// var arr5= { 0: 'a', 1:'b', length:4 }; //[ 'a', 'b', undefined, undefined ]
var arr5= { 0: 'a', 1:'b', 2: 'c', 3: 'd', length:4 }; //[ 'a', 'b', 'c', 'd' ]
var arr6=Array.from(arr5);
console.log(arr6);

//using spread
var arr7=[...str3];
console.log(arr7);


//------for of
for(let val of arr){
  console.log(val);
}

//------for in
const person={
  name: 'Happy',
  role: 'Developer'
};
for(let key in person){
  console.log(person[key]);
}


//---------Named function expression
function sum(a, b){
  return a+b;
}
console.log(sum(3, 5));
//OR
const add = function sum(a, b){
  return a+b;
}
console.log(add(3, 5));



//------Anonymous function Expression
console.log(function(a, b){
  return a+b;
}(6, 8));

(function(a, b){
  console.log(a+b);
}(6, 10));

//OR
let greet = function () {  //No function name (stored in variable)
  console.log("Hello");
};
greet();


//IIFE(Immediately Invoked Function Expression)
(function(){
  console.log("I run immediately");
})();

//with arrow function
(()=>{
  console.log("Arrow IIFE");
})();