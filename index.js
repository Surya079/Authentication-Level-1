import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

app.get('/home', (req, res)=>{
    res.render("home.ejs")
});

app.get('/login', (req, res)=>{
    res.render("login.ejs")
});

app.get('/register', (req, res)=>{
    res.render("register.ejs")
});

app.listen(port, (req, res)=>{
    console.log(`Server is listening on ${port}`);
});