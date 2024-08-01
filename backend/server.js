import express from "express";
import chalk from "chalk";
import fs from "fs";

const app = express();
const PORT = 3333;

app.use(express.json({ limit: "50mb" }));

app.listen(PORT , () => {
    console.log(
        chalk.bgBlue("Server started: "),
        chalk.blue(`Listening to port ${PORT}`)
    );

    app.get('/api/bundle', (req, res) => {
        fs.readFile( __dirname +'bundle' +".json", 'utf8', function (err, data) {
            res.send(data);
            res.end( data );
        });
    });

    app.get('/api/products', (req, res) => {
        fs.readFile( __dirname +'products' +".json", 'utf8', function (err, data) {
            res.send(data);
            res.end( data );
        });
    });
})