const express = require('express')


const app = express()
const port = 4000

app.post('/submit-form', (req, res, next)=>{
    console.log('form received');
    res.send('thanks buddy');
});


app.listen(port, ()=>{
    console.log('server running on port ', port)
})