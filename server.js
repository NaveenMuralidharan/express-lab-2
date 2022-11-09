// require dependencies
const express = require('express');

const app = express();

const PORT = 3000;

// ROUTES
app.get('/greeting/:name', (req, res)=>{
    res.send('Wow! Hello there, ' + req.params.name);
})




app.listen(PORT, ()=> {
    console.log('listenng on port '+PORT)
})
