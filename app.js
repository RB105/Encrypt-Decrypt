const express = require('express');

const app = express();
const crypto = require('crypto');

require('dotenv').config();

app.use(express.json());

// .env config
const host = process.env.HOST;
const port = process.env.PORT;

app.post('/login', (req, res) => {
    const key = Buffer.from('qw34rf5tge2==rdd5ft5==3esw1qw34w');
    const iv = Buffer.from('q3456==fr4325try');

    //decrypt
    let dataToDecrypt = req.body.email;
    console.log(dataToDecrypt);
    const decrypter = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decrypter.update(dataToDecrypt, 'base64', 'utf8');
    decrypted += decrypter.final('utf8');
    console.log(decrypted);

    //encrypt
    let dataToEncrypt = "qs3322r2sfdsfqw==23asdmlkadnjnj3dnbcdbh3"; // token
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(dataToEncrypt, 'utf8', 'base64');
    encrypted += cipher.final('base64');


    res.json({
        token: encrypted
    });
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});