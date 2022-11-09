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

// MAGIC ROUTE
app.get('/magic/:question', (req, res)=>{

    let eightBallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    let randomResponseIndex = Math.floor(Math.random() * (eightBallResponses.length-1))
    let randomResponse = eightBallResponses[randomResponseIndex]

    res.send(`${req.params.question} ? - Magic 8 ball response - <h1> ${randomResponse} </h1>`)
})

app.listen(PORT, ()=> {
    console.log('listenng on port '+PORT)
})
