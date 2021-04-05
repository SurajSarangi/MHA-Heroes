const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000 ;

const server = http.createServer((req,res) => {
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            console.log(err);
            res.writeHead(404, { "Content-Type" : "text/plain" });
            return res.end(`404 bad request error: ${err.code}`);
        } else {
            res.writeHead(200, { "Content-Type" : "text/html" });
            res.end(data);
        }
    })
});

server.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`));