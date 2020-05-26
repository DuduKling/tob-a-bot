const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send('Post World!');
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = '127.0.0.1';

app.listen(PORT, (err) => {
    if(err) console.error('Server :: Something went wrong')
    else console.log(`Server :: Listening on port http://${HOSTNAME}:${PORT}`);
})
