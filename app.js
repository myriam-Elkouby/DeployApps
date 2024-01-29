const express = require('express');
const path = require('path');
const app = express();
const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');
    
const port = process.env.PORT || 8000;
//API Key
//rnd_whG9BF6E05evkbFjts1JAtCOMAgr

app.get("/", (req, res) => {
    sdk.auth('rnd_whG9BF6E05evkbFjts1JAtCOMAgr');;
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {
            console.log(data);
            res.json(data);
        })
        .catch(err => console.error(err));
});

app.get("/names", (req, res) => {
    sdk.auth('rnd_whG9BF6E05evkbFjts1JAtCOMAgr');
    sdk.getServices({ limit: '20' })
        .then(({ data }) => {
            console.log(data.map(e => e.service.name));
            res.json(data.map(e => e.service.name));
        })
        .catch(err => console.error(err));
});


// Start the Express app
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
