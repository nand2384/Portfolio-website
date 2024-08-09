require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect("/home")
})

app.get('/home', (req, res) => {
    res.sendFile("index.html", {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile("about.html", {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
