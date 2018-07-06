const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; //To work w/ Heroku

app.get('/', (req, res)=>{
  res.send('this works');
})

app.listen(PORT, ()=>{
  console.log('Listening...');
})
