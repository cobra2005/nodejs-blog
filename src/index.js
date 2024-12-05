const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');


// Middleware is used to parse data from the body of requests of type application/x-www-form-urlencoded(form data)
app.use(express.urlencoded({ extended: true }));
// Middleware is used to parse requests with bodies in JSON format 
app.use(express.json());

// HTTP logger middleware - Morgan
app.use(morgan('tiny'));

// Access to static file
app.use(express.static(path.join(__dirname, 'public')));

// Template engines - express-handlebars
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})