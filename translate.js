const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();
;


var subscriptionKey = process.env.KEY
var endpoint = "https://api.cognitive.microsofttranslator.com/";

var location = process.env.LOCATION;


module.exports = async function translate(translateText,targetLanguages,sourceLanguage) {    
    return axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': sourceLanguage,
            'to': targetLanguages
        },
        data:translateText,
        responseType: 'json'
    }).then(function (response) {
        console.log(JSON.stringify(response.data, null, 4));
        //res.send(JSON.stringify(response.data, null, 4));
        // res.send(JSON.stringify(response))
        return response.data
    })
}

