
//-----------------------------------------class 1------------------------------------------------------------
//JS examples
let obj ={
    name: "Manisha",
    age: 21,
    address: "Baharagora",
    company: "Google"
}

let fn=({name, company})=>{
    console.log(name, company);
};
fn(obj); //Manisha Google



let a = 990;
let print=()=>{
    console.log(a); //990 -> it will print the parental scope only
}

let ab=()=>{
    let a=80;
    print();
};

ab(); //990


//-----------------------------------------------------------------------------------------------------------------------------
// React -> it is a lightweight copy of real dom

//CDN- Content Delivery Network -> It provides links for any library & Framework
//go to react CDN then paste these CDN links in index.html
//<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
//<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

console.log(React); //Now React has been integrated in our JS


//Document means real DOM

//real dom -> rendering 
let h1=document.createElement("h1");
console.log(h1);
h1.textContent="Hellooooooo";
document.body.append(h1);


//virtual dom, ReactDOM-------------------------------------------------------------------------
//Virtual DOM tracts UI states and calculate UI changes, while ReactDOM pushes updates to the browser's real DOM

//react dom will tell to the real dom that how to keep the elements
//ReactDOM is the middleware between the vitual dom and realDOM
console.log(ReactDOM);


// let rh1=React.createElement("h1", {className: "box"}, "hello i'm virtual dom");
let div=React.createElement("div", {}, [React.createElement("h1", null, "I am under div"), React.createElement("h2", null, "I am also under div") ]);
console.log(div);

let span=React.createElement('span', {}, React.createElement("h1", null, "I am under span"));
console.log(span);


//ReactDOM is the concept jo realDOM me React k elements ko entry dilayega
//ReactDOM ek element select karega realDOM ka uske andar React k sare elements ko render karwayega, and uss element ko root node bana dega
let realDomEle = document.querySelector("#root");
let rootOfReact= ReactDOM.createRoot(realDomEle); //createRoot is the method inside ReactDOM
rootOfReact.render(div);
// rootOfReact.render(span);



// ESM -> Ecma Sript Module
//5000 lines of code-> 1 file

//ES6 -> 5 files -> 1000 lines
// it enables multiple scopes in js


//-------------------import export--------------------------------------------------------------------------------
//for using import and export we have use type="module" in script tag

import {n, sum} from "./main.js"

console.log(n);

console.log(sum(10, 40));

