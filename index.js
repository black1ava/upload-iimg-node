const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, function(){
  console.log(`Server is running on http://localhost:${ PORT }`);
});