const express = require('express');
const router = express.Router();
const https = require('https');

router.get('/', (req, res) => {

    https.get('https://api.chucknorris.io/jokes/random', (resp) => {
        let data = '';
        resp.on('data', (chunk) => data += chunk);
        resp.on('end', () => {
            data = JSON.parse(data);
            res.render('index', {
                name: 'Tob',
                joke: data.value,
            })
        });
    }).on("error", (err) => console.log("Error: " + err.message))
});

module.exports = router;