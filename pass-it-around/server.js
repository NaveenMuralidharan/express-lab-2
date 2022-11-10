const express = require('express');

const app = express();

const PORT = 3000;

// Index route
app.get('/', (req, res)=>{
    res.send(`
                <h2> 99 Bottles of beer on the wall! </h2>
                <a href="/98">take one down, pass it around</a>
            `)

})

app.get('/:numberOfBottles', (req, res)=>{

    // 
    let bottlesNum = Number(req.params.numberOfBottles)

    if(bottlesNum === 0){
        res.send(`
                    <h2> ${bottlesNum} Bottles of beer on the wall! </h2>
                    <a href="/">Start over</a>
                `)
    } else {
        res.send(`
                    <h2> ${bottlesNum} Bottles of beer on the wall! </h2>
                    <a href="${bottlesNum - 1}">take one down, pass it around</a>
            `)
    }
        

})




app.listen(PORT, ()=> {
    console.log('app is running at PORT '+ PORT)
})