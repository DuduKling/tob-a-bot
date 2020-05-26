const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Midlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Homepage
app.get('/', (req, res) =>
    res.render('index', {
        name: 'Tob',
        joke: 'Chuck Norris flosses his teeth with barbed wire.',
    })
);


// API
app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('Post World!');
});


// Server
const PORT = process.env.PORT || 5000;
const HOSTNAME = '127.0.0.1';

app.listen(PORT, (err) => {
    if (err) console.error('Server :: Something went wrong')
    else console.log(`Server :: Listening on port http://${HOSTNAME}:${PORT}`);
})