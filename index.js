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

    translate(translateText,targetLanguages,sourceLanguage).then((translated)=>{
        console.log(JSON.stringify(translated, null, 4));

        res.send(JSON.stringify(translated, null, 4));

    });
    // console.log(respo)
    // res.send(JSON.stringify(respo, null, 4));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})