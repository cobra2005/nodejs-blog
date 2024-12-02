const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;


// HTTP logger middleware - Morgan
app.use(morgan('tiny'));

// Access to static file
app.use(express.static(path.join(__dirname, 'public')));

// Template engines - express-handlebars
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
app.get('/trang-chu', (req, res) => res.render('home'));
app.get('/news', (req, res) => res.render('news'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})