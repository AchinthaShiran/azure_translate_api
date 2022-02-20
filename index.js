const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3000

var translate = require("./translate.js")

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


app.post('/', (req, res) => {
    var targetLanguages = req.body.targetLanguages;
    var sourceLanguage = req.body.sourceLanguage;
    var translateText = req.body.data;

    var result = Array();

    translate(translateText, sourceLanguage, targetLanguages).then((translated) => {

        for (let i = 0; i < translated.length; i++) {
            result.push(translated[i]["translations"][0]["text"])
        }
        res.send(JSON.stringify(result, null, 4));
    });
    // console.log(respo)
    // res.send(JSON.stringify(respo, null, 4));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})