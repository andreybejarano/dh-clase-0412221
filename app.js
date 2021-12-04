const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'views/about.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})