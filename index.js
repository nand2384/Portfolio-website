require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
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

app.get('/projects', (req, res) => {
    res.sendFile("projects.html", {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile("contact.html", {root: __dirname})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect('mongodb://localhost:27017/Portfolio', {
}).then((dbo) => {
    console.log("DB connected");
}, (err) => {
    console.log("error");
});;

const messageSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    message: {type: String}
});

const Message = mongoose.model('Messages', messageSchema);


app.post('/send', async (req, res) => {
    try {
        console.log(req.body);
        const newMessage = await Message.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        res.json(newMessage);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
});