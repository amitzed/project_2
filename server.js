const express = require('express');
const app = express();
// mongoose already required below around LINE 15.
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const methodOverride = require('method-override');


const PORT = process.env.PORT || 3000; //To work w/ Heroku

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(session({
  secret:'feedmeseymour',
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));


// Return to MAIN PAGE
app.get('/', (req, res)=>{
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});
   // Guitars
app.get('/guitars/index', (req, res)=>{
    if(req.session.currentUser){
        res.send('the main app');
    } else {
        res.redirect('/sessions/new');
    }
})
  // Bass Guitars
app.get('/basses/index', (req, res)=>{
    if(req.session.currentUser){
        res.send('the main');
    } else {
        res.redirect('/sessions/new');
    }
})

// CONTROLLERS
const userController = require('./controllers/users.js')
app.use('/users', userController);

const guitarsController = require('./controllers/guitars.js');
app.use('/guitars', guitarsController);

const bassesController = require('./controllers/basses.js');
app.use('/basses', bassesController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);


// Listen/Connect
app.listen(PORT, ()=>{
  console.log('Listening...');
})

mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('connected to mongoose!');
})
