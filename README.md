# Authentication Level -1

*  _we know the authentocation how advanced tech skill and secure of users data. Here, we get to know the 1st lvl of authendication. I mean, The user can login and register by email & password. Let's Go through how to achive!_

* _First we need to set up our server by using `node.js and express.js`._

## Home Page 

*  _we have  achive this by using `embedded javascript, node.js nad express.js` 

```
    app.get('/home', (req, res)=>{
        res.render("home.ejs")
    });

```

![alt text](image.png)


## Login page

```
    app.get('/login', (req, res)=>{
        res.render("login.ejs")
    });


```

![alt text](image-1.png)

## Register Page

```
    app.get('/register', (req, res)=>{
        res.render("register.ejs")
    });

```

![alt text](image-2.png)