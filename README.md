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

## Database

* _Creating database for store username and password_
```
    create table users(
        id serial primary key,
        username varchar(45) not null unique,
        password varchar(100)
    )
```
## login 

*  _if user put username and password was correct, successfully login_ 
![alt text](image-3.png)

* _if login successfully, thats redirect secret `secret.ejs` page in our website_

![alt text](image-4.png)

## login with new user or password wrong

* _Incase of wrong username or password user getting given error message..._ 

![alt text](image-5.png)

![alt text](image-6.png)


## register 

* _The user given the input was found in database it's showing error given bellow.._

![alt text](image-7.png)

* _If user put new username or password, then they successfully register and thats redirect `secret.ejs`._

![alt text](image-4.png)