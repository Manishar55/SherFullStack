
const express = require('express');
const app =express();
app.use(express.json()); //express is the method which allows to add any element into express

let users = [
    {
        name: "manisha",
        age: 21,
    },
    {
        name:"Rana",
        age: 22,
    }
]

// read
app.get('/', (req, res)=>{
    // res.send("express is running...");
    res.send(users);
});



//---------------------------------------------------------------------------

let data=[];
//create
app.post('/create', (req, res)=>{

    // res.send("response sent!!");
    // res.send(req.body);
    // console.log(req.body); 

    data.push(req.body); //pushing all the requests in the data array
    //res.send(data); //then sending the array in a response
    res.send("posted..");
});

app.get('/datas', (req, res)=>{
    res.send(data);
    console.log(data);
});


//delete
app.delete('/delete/:id', (req, res)=>{
    //let idx=req.params; //we'll get an object, we'll get the id from the api
    //console.log(idx);// -> { id: '3' } -> http://localhost:3000/delete/3 -> 3 is the params here -> if you pass anything from the parameter it will come in string only -> 3 is also a string

    let { id } = req.params; //destructuring id becuase object is coming inside params
    let userData = data.filter((val)=>val.id!==id);
    data=userData;
    res.send("user deleted successfully");
});


//update
app.put('/update/:id', (req, res)=>{

    let { id } = req.params;
    let { name } = req.body; //we are taking name from the body

    let updatedData = data.map((val)=>
        val.id===id ? {...val, name } : val //update name and keep other values as it is
    );
    res.send(updatedData);
});


let port = 3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
