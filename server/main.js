import express from 'express';

const app = express();

let port = 3000;

app.use('/', express.static(__dirname + '/../public'));
app.get('/home', (req,res)=>{
    return res.send('MY HOME');
});


const server = app.listen(port, ()=>{
    console.log('Listening on port ', port);
});