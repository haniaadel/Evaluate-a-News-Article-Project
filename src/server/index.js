var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.static('dist'))

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key
let apiUrl = '';
const apiKey = process.env.API_KEY;

// GET route
app.get('/', function (req, res) {
    res.sendFile('./dist/index.html')
    // res.send("This is the server API page, you may access its services via the client app.");
});

// POST Route
app.post('/api', async (req, res) => {
    const url = req.body.url; // Access the URL from the request body
    // Process the URL and send a response
    apiUrl = url;
    // console.log(`${apiUrl} + ${apiKey}`);
    const apiData = await postRequest(apiKey, apiUrl);
    // console.log(apiData.response.language);
    res.json({ message: 'success', data: apiData});
});

const postRequest = async (key, url) => {
    const response = await fetch ('https://api.textrazor.com/', {
        method: 'POST',
        headers: {
        'x-textrazor-key': key,
        'content-type': 'application/x-www-form-urlencoded'
        },
        body: `extractors=topics,phrases&url=${url}`,
    });
    try{
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error){
        console.log('error', error);
    };
};

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


