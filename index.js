const express = require('express');
const path = require('path');
const app = express();
const port = 3200;


app.use(express.static(path.join(__dirname, 'views')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));
