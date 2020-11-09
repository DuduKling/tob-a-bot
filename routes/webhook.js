const express = require('express');
const router = express.Router();

const Model = require("../model");
const Helper = require("../model/helper");

// API
router.post('/dialogflow', (req, res) => {
    console.log(`Webhook :: ${req.body}`);

    const message = req.body.queryResult.queryText;
    const intent = req.body.queryResult.intent.displayName;
    const parameters = req.body.queryResult.parameters;
    let response = '';

    switch (intent) {
        case 'VerCardapio':
            response = Model.verCardapio(message, parameters);
            break;
        case 'verStatus':
            response = Model.verStatus(message, parameters);
            break;
        default:
            response = Model.default();
    }

    response = Helper.formatResponse(response);

    res.send(response);
});

router.post('/telegram', (req, res) => {
    console.log(`Telegram Webhook :: ${req}`);

    res.send(200);
});

module.exports = router;