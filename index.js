const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Routes
app.use('/', require('./routes/homepage'));
app.use('/webhook', require('./routes/webhook'));


// Server
const PORT = process.env.PORT || 5000;
const HOSTNAME = '127.0.0.1';

app.listen(PORT, (err) => {
    if (err) console.error('Server :: Something went wrong')
    else console.log(`Server :: Listening on port http://${HOSTNAME}:${PORT}`);
})