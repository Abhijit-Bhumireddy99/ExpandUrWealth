if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

// imports express.js framework or library, express - a constant variable which stores express.js 
const express = require('express'); 
// generates a copy of express.js library, app - a constant variable which stores express.js library copy
const app = express(); 
// used to read static files (for example: images, CSS files, JavaScript files, etc.)

const bcrypt = require('bcrypt');

const passport = require('passport');

const flash = require('express-flash');

const session = require('express-session');

const methodOverride = require('method-override');

const users_database = [];

const initializePassport = require('./passport-config');
initializePassport(
  passport, 
  email => users_database.find(user => user.email === email ),
  id => users_database.find(user => user.id === id)
);

app.use(express.static('public')); 
// sets up the folder or directory, basically this contains views (HTML templates), use these views to disply or render
app.set('views', './views');
// sets the view engine to .ejs, To put this another way, if the application(s) render or display views, it makes use
// of ejs templating engine instead of html  
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

app.use(flash());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

// sets a route or a link for the home page ('/'), basically this renders or displays the index.html through
// ejs template engine
app.get('/', (req, res) => {
    res.render('index');
})

// sets a route or a link for the domestic stocks discover web page ('/domestic_stocks'), basically this renders or 
// displays the Domestic_Stocks_Discover.html through ejs template engine
app.get('/domestic_stocks', function(req, res) {
    res.render('Domestic_Stocks_Discover', {name: req.user.name});
});  

// sets a route or a link for the domestic holdings web page ('/domestic_holdings'), basically this renders or displays
// the Domestic_Holdings.html through ejs template engine
app.get('/domestic_holdings', function(req, res) {
    res.render('Domestic_Holdings', {name: req.user.name});
});

app.get('/ipo', function(req, res) {
  res.render('Ipo', {name: req.user.name});
});

app.get('/company-details-and-fundamentals', function(req, res) {
  res.render('company-details-and-fundamentals', {name: req.user.name});
});

app.get('/orders', function(req, res) {
  res.render('orders', 
              {name: req.user.name,
               stockName: req.query.stockName,  
               orderType: req.query.orderType, quantity: req.query.quantity});
});

app.get('/login', checkNotAuthenticated, function(req, res) {
    res.render('login');
});

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/domestic_stocks',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/register', checkNotAuthenticated, function(req, res) {
    res.render('register');
});

app.post('/register', checkNotAuthenticated, async(req, res) => {
    try {
      const hash_password = await bcrypt.hash(req.body.password, 10);
      const hash_password_1 = await bcrypt.hash(req.body.password_ID, 10);
      users_database.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hash_password,
        password_ID: hash_password_1,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        country: req.body.country
      });
      res.redirect('/login');
    } catch {
      res.redirect('/register');
    }
    // an important point to note - everytime we save our application, and it reloads this variable users_database
    // is going to get reset to an empty array. So, everytime we make a change, we just need to delete the below line 
    // and re-add it (i.e. everytime when the change or update occurs in the registration page - just remove 
    // console.log(users_database) statement and again re-add "console.log(users_database")
    // the reason for this is - we are not making use of a database, this is just storing in a memory 
    console.log(users_database); 
});

app.delete('/logout', (req, res) => {
  req.logOut(function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/login');
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/'); 
  }
  next();
}

// a function, initiates a node.js server, and waits on a partiular port for incoming requests
// here - 3000 is a port number, where node.js server will wait for incoming requests
app.listen(3000);