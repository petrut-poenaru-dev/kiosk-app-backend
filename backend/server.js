const express = require('express');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const orderNumberHelper = require('./order-number.helper');

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/api/bundle', (req, res) => {
    const filePath = path.join(__dirname, 'bundleSettings.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('A apărut o eroare la returnarea fișierului');
        }
    });
});

app.get('/api/products', (req, res) => {
    const filePath = path.join(__dirname, 'products.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('A apărut o eroare la citirea fișierului');
        }
        res.send(data);
    });
});

app.post('/api/orderNumber', (req, res) => {
    const currentOrderNumber = orderNumberHelper();
    res.json(currentOrderNumber);
});

app.listen(PORT, () => {
    console.log(
        chalk.blue('Server started:'),
        chalk.blue(`Listening to port ${PORT}`)
    );
});
