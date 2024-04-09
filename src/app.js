const express = require ('express');
const app = express();
const path = require('path');

const port= process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Servidor corriendo en la ruta http://localhost:${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/login.html'))
})

app.use(express.static("public"));