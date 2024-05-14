const express = require('express');
const routes = require('./src/routes'); 
const path = require('path');
const {engine} = require('express-handlebars');
require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');


const app = express();

app.use(session({
  secret: 'secretKey',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));


mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((err) => console.error('Error conectando a MongoDB', err));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(routes);




app.listen(3000, () => {
    console.log('Server running on port 3000');
});
