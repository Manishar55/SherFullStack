//-----------------------------------DAY 4 ------------------------------------------
//Functions-> accessible, reusable, systematic block of code

function greet(user, age){ //parameters
    console.log('Good Evening....', user); 

    if(age>=18){
        console.log('Eligible candidate');
    }
    else{
        console.log('Not eligible');
    }
}
greet("Manisha", 21); //arguments


a1();
//function declaration -> can be hoisted
function a1(){
    console.log('hello guys....1, hoistded');
}

//function expresssion -> can not be hoisted 
var a2= function(){
    console.log('hello guys....2');
}

//arrow function
var a3 = () =>{
    console.log('hello guys....3');
}


//one liner function
var a4 = ()=> console.log('hello guys....4');
var a5 = (a, b)=> console.log('hello guys....5', a, 'and', b);
var a6 = a => console.log('hello guys....6', a);

a2();
a3();
a4();
a5("Manju", "Rana");
a6("Manishaaa");

//IIFE - Immediately invoked function expression => It's a function that runs the moment it's defined
//it is mainly used to create private scope so variable don't pollute the global scope
//before Es6 javascript only had function scope using var. IIFEs were only way to create private local scope 
(function(){
    console.log('This is IIFE, I run Immediately');
})();

(()=>console.log('This is IIFE 2, I run Immediately'))()


function a7(){
    console.log('Hello...'); //Hello...
    // return 10;
}
console.log(a7()); //undefined  //it will call the function but print undefined for this, because function is not returning anything 


var a8 = () =>{return 0}; //In one liner, we have to use {} also, with return statement
console.log(a8());

//without return
var sum=(a, b)=>a+b;
console.log(sum(900, 98));


var a9=()=>{
    return 90;
    console.log('Helloooo'); //it will not come, anything after return statement will not come, function ends after return 
}
console.log(a9());

//Pure Functions -> It will not change the original functionality
//always returns the same output, No side effects (doesn't change anything outside itself)

//Impure Functions -> It will change the original functionality
//output may vary, Or it changes outside(modifies a global variable, logs to console, makes a network call etc)

//pure function
function add(a, b){
    return a+b
}
console.log(add(5, 8));

//impure function-> it is changing the global variable (external variable)
var a=10;
function abc(){
    a++;
    return a;
}
console.log(abc()); //11
console.log(abc()); //12 

function abcd(){ //but this not impure function coz it is not changing the external variable
    var b=10;
    b++;
    return b;
}
console.log(abcd());

//extra arguments will be ignored
function a10(a, b){
    console.log(a, b);   
}
a10(1000, 2000, 30000);

//for extra parameters, undefined will come
function a11(a, b, c){
    console.log(a, b, c);   
}
a11(10, 20);

//with return, for extra parameters, NaN will come
function a12(a, b, c){ 
    return a+b+c;  
}
console.log(a12(10, 200)); //10+200+undefined = NaN


//set default parameter
function greet(user="Manisha"){
    console.log('welcome', user); 
}
greet("Manju");
greet();


