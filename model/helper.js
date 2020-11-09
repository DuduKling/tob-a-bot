exports.formatResponse = (response) => {
    let resp = {
        fulfillmentText: "Webhook response",
        fulfillmentMessages: [],
        source: "example.com",
    }

    switch (response.type) {
        case 'text':
            resp.fulfillmentMessages = {
                "text": {
                    "text": [
                        response.message
                    ]
                }
            }
            return resp;
        case 'image':
            resp.fulfillmentMessages = {
                "image": {
                    "imageUri": response.url,
                }
            }
            return resp;
        case 'card':
            resp.fulfillmentMessages = {
                "card": {
                    "title": response.title,
                    "subtitle": response.subtitle,
                    "imageUri": response.imageUri,
                    "buttons": [{
                        "text": "Button Text",
                        "postback": "https://example.com"
                    }]
                }
            }
            return resp;
            break;
        case 'quickReplies':

            break;
        default:
            return response;
    }
}