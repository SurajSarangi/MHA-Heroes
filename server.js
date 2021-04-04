const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000 ;

const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
    res.writeHead(200, { "Content-Type" : "text/plain" });
    res.end("Hello UA");
});

server.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`));