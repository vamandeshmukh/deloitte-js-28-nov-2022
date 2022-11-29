
const express = require('express');
const app = express();
const port = 9090;

app.listen(port, () => {
    console.log(`Open http://localhost:${port} on your browser.`);
});

app.get('/', (request, response) => {
    response.send('Welcome to Deloitte node demo app!');
});

