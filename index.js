const express = require('express')
const bp = require('body-parser')
const cors = require('cors');

const app = express()
const port = 3001

var translate = require("./translate.js")

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.use(cors({
    origin: '*'
}));

app.post('/api', (req, res) => {
    var targetLanguages = req.body.targetLanguages;
    var sourceLanguage = req.body.sourceLanguage;
    var translateText = req.body.data;

    var result = Array();

    translate(translateText, sourceLanguage, targetLanguages).then((translated) => {
        for (let i = 0; i < translated.length; i++) {
            translated[i]["translations"].forEach(element => {
                result.push(element["text"])
            });
        }
        res.send(result);
    }).catch((err) => {
        res.sendStatus(500);
    });
})

app.listen(process.env.PORT||port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})