const express = require('express');

const app = express();

require('dotenv').config();

app.use(express.json());

// .env config
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port,host, () => {
    console.log(`http://${host}:${port}`);
});