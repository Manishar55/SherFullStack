//---------------------------------DAY 1---------------------------------------------------------

//ECMA- Europian Computer Manufacturer Association
//EcmaScript - In the mid-1990s, Netscape created JavaScript. To prevent different web browsers from inventing 
// their own incompatible versions of the language, Netscape submitted the language to Ecma International for 
// standardization. Because "JavaScript" was a trademark, the standardized version was named ECMAScript

//ECMAScript (/ˈɛkməskrɪpt/; ES) is the standard for the JavaScript language, intended to ensure the interoperability 
// of web pages across different web browsers.

//Datatypes in js
//Primmitive:
//Number
//String
//Boolean
//undefined -> a variable has been declared but not yet assigned a value
//null -> Intentionally assined null
//BigInt -> for huge number (2^53-1)
//Symbol ->Symbol creates unique variables

//Non-Primitive 
//Array, Objects, Functions

console.log('Hello Js...');
console.warn('This is a warning...');
console.error('This is an error');
console.table(['Manisha', 'Rana', 'Manju']);
console.info('just info');


var a='hiii';
console.log(typeof(a));

var b=10n;
console.log(typeof(b));

var s1= Symbol('hi');
var s2= Symbol('hi');
console.log(s1==s2);  //false ->Symbol creates unique variables

var a1='hi';
var a2='hi';
console.log(a1==a2); //true


// var c= alert('hii there');
// console.log(c);

// var d= confirm('Are you sure'); //it options ok or cancel
// console.log(d);

// var p= prompt('Enter Your Name'); 
// console.log(p); 
// console.log(typeof(p)); //it will always come in string format even if you enter a number


console.log('Manisha'/10); //NaN
console.log('Manisha'+90); //Manisha90 -> no NaN because + is also used for concatenation

//same behaviour happens for promt also
var x= prompt('Enter a number'); //30
var y= prompt('Enter a number'); //10

console.log(x+y); //3010 -> concatenation
console.log(x-y); //20
console.log(x*y); //300
console.log(x/y); //3


var num=10000000000000000000000000000000000000n;
console.log(num);
console.log(typeof(num));
