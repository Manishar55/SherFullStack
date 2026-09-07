let http = require("http");
// console.log(http);

//creating server
let server = http.createServer((req, res)=>{
    console.log("Hello I'm server");
    res.end("server is running");
});

//run the serevr-> In our system RAM has so many ports there are 64535 ports, we can use any
server.listen(3000, ()=>{
    console.log('server is running on port 3000...');
});