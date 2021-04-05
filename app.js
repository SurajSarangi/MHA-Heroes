const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000 ;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    fs.readFile("./views/index.html", (err, data) => {
        if(err){
            res.statusCode=404;
            res.setHeader("Content-Type" , "text/plain");
            return res.end(`error : ${err.code}`);
        } else {
            res.statusCode=200;
            res.setHeader("Content-type" , "text/html");
            return res.end(data);
        }
    });
});

app.get('/:xy', (req,res) => {
    res.statusCode=404;
    res.setHeader("Content-Type" , "text/plain");
    return res.end(`${req.url} path doesnt exist.`);
})

app.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`));