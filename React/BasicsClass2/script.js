
//React creates virtual dom -> because it is light weight -> but real dom doesn't understand VD ->Then react DOM comes and 
//virtual DOM ko real DOM k ek element se connect karta hai -> real dom k ek element ko virtual dom k root se attach kar dete h and ye root reactDOM se banta hai


//VD me update hota h first then then Real DOM k saath compare hoke real DOM me update hota hai
//whenever we update something in react -> whole process behind the sence  it is called recounciliation 
//Recounciliation -> it's a process to updating real DOM, there are two phase in recounciliation
//1. Render Phase
//2. Commit phase

//real DOM light weight copy -> Virtual DOM -> when we update something, a new VD gets created & updated -> then in
//render phase, comparision between old VD vs new VD happens with the help of diffing algorith (it tracks changes) -> 
//after comparision it stores updation ->in commit phase, updates integrates in real DOM -> comparison k baad new VD delete h jati hai

//IN SHORT jitni bar chnages karoge utni bar new virtual DOM create hogi, fir wo old se compare hoga and realDOM update hoga and old vd delete ho jayega

// React 2015 -> For recounciliation -> stack engine use hota tha (it executes line by line, it will stop other process)
//from 2016 -> For recounciliation -> Fiber engine use hota hai (optimized)

const h1=React.createElement("h1", {}, "Hello React...");
console.log(h1);
let root = document.querySelector("#root");
ReactDOM.createRoot(root).render(h1);

