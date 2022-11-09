// require dependencies
const express = require('express');

const app = express();

const PORT = 3000;

// ROUTES

// GREETING ROUTE
app.get('/greeting/:name', (req, res)=>{
    res.send('Wow! Hello there, ' + req.params.name);
})

// TIP CALCULATOR ROUTE
app.get('/tip/:total/:tipPercentage', (req, res)=>{
    let tipAmount = (Number(req.params.total) * Number(req.params.tipPercentage))/100
    res.send('Tip amount is $'+tipAmount)
})



app.listen(PORT, ()=> {
    console.log('listenng on port '+PORT)
})
