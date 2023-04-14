const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send("Задание 1");
})

app.get('/add', (req, res) => {
    let n1 = req.body.A;
    let n2 = req.body.B;
    let result = n1 + n2;
    if (typeof n1 == "number" || typeof n2 != "number"){
        return res.sendStatus(400)
    }else{ res.send(`Результат: ${result}`)}
});

app.get('/subtract', (req, res) => {
    let n1 = req.body.A;
    let n2 = req.body.B;
    let sum = n1 - n2;
    res.send(`Результат: ${sum}`);
});

app.get('/multiply', (req, res) => {
    let n1 = req.body.A;
    let n2 = req.body.B;
    let sum = n1 * n2;
    res.send(`Результат: ${sum}`);
});

app.get('/divide', (req, res) => {
    let n1 = req.body.A;
    let n2 = req.body.B;
    let sum = n1 / n2;
    res.send(`Результат: ${sum}`);
});


app.post('/add', (req, res) =>{
    let n1 = req.body.A;
    let n2 = req.body.B;
    let sum = n1 + n2;
    console.log(req.body)
    res.send(`Результат: ${sum}`)
});

app.post('/subtract', (req, res) =>{
    let n1 = req.body.A;
    let n2 = req.body.B;
    let sum = n1 - n2;
    console.log(req.body)
    res.send(`Результат: ${sum}`);
});

app.post('/multiply', (req, res) =>{
    let n1 = Number(req.body.A);
    let n2 = Number(req.body.B);
    let sum = n1 * n2;
    console.log(req.body)
    res.send(`Результат: ${sum}`);
});

app.post('/divide', (req, res) =>{
    let n1 = Number(req.body.A);
    let n2 = Number(req.body.B);
    let sum = n1 / n2;
    console.log(req.body)
    res.send(`Результат: ${sum}`);
});


app.listen(8000);


