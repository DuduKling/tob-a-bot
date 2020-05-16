const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const serverPort = 3000;
app.listen(serverPort, (err) => {
    if(err) console.error('Server :: Something went wrong')
    else console.log(`Server :: Listening on port ${serverPort}`);
})
