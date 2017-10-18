const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
    const { a, b } = req.params;
    const result = +a + +b;
    res.send(`${result}`); 
});

app.listen(3000);