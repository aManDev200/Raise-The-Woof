const express = require('express');
const z = require('zod'); 
const app = express();
const port = 3000;

app.use(express.json());

app.post('/healthcheckup',(req,res)=> {
    const a = req.body.a;
    const b = req.body.b;
    res.send(`you have ${b} kidney length`);
})

app.listen(port,()=>{
    console.log(`The port is active on this ${port}`);
});