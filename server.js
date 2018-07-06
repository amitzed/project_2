const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //To work w/ Heroku

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
 mongoose.connect(mongoUri);


app.get('/', (req, res)=>{
  res.send('this works');
})

app.listen(PORT, ()=>{
  console.log('Listening...');
})

mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('connected to mongoose!');
})
