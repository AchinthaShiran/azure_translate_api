# Nodejs Backend for Azure Translate

Nothing much, just the nodejs code for the [Microsoft Azure Translate](https://azure.microsoft.com/en-us/services/cognitive-services/translator/#overview) API

### Sample Request
`POST /api`

    curl -X POST \
    http://localhost:3001/api \
    -H 'cache-control: no-cache' \
    -H 'content-type: application/json' \
    -H 'postman-token: c29bd064-7243-a3d9-0751-80xxxxxxxxxx' \
    -d '{
     "data" : [
      {
        "text":"Hello"
      },
      {
        "text":"bye"
      }
     ],
     "targetLanguages":["fr","it"],
     "sourceLanguage":"en",
     "key":"1981721xxxxxxxxxxxxxxxxxxxxxxxxx",
     "location":"Global"
    }'

### Sample Response
    [
    "Bonjour",
    "Ciao",
    "au revoir",
    "arrivederci"
    ]

---

Check out the dashboard for text data augmentation using back translation from [here](https://github.com/AchinthaShiran/text_augmentation_dashboard) 👈(ﾟヮﾟ👈)

### Demo
(👉ﾟヮﾟ)👉 [Click to see the demo](https://text-augmentation-dashboard.herokuapp.com/)
