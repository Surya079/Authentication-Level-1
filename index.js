import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));

const db = new pg.Client({
    user : "postgres",
    database : "Auth-1",
    host : "localhost",
    password: "Suryavme@005",
    port : 5432

})
db.connect();

app.get('/', (req, res)=>{
    res.render("home.ejs")
});

app.get('/login', (req, res)=>{
    res.render("login.ejs")
});

app.get('/register', (req, res)=>{
    res.render("register.ejs")
});


app.post('/login', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try {
        const result = await db.query("select * from users where username = $1 ",[username]);
        try {
            if (result.rows[0].username == username) {
                if (result.rows[0].password == password) {
                    res.redirect("secret.ejs");
                } else {
                    res.render("login.ejs", { error : "password incorrect try again "})
                }
            } else {
                res.render("login.ejs", { error : "username or password not found.. go to  register "})
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
    // console.log(username);
    // console.log(password);
})

app.post('/register', async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
    try {
        const result = await db.query("select * from users where username = $1", [username]);
        try {
            if (result.rows.length > 0) { 
                res.render("register.ejs",{ error : "username already registered.."})
            } else {
                await db.query("insert into users (username, password) values ($1, $2)", [username, password]);
                res.redirect('/secret.ejs')
            }
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        console.log(error);
    }
    // console.log(username);
    // console.log(password);
})

app.listen(port, (req, res)=>{
    console.log(`Server is listening on ${port}`);
});