const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('a');
});

app.listen(3009, ()  => console.log('Started!'));