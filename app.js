const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('hola');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})