const info = (req) =>{
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    console.log();
};

module.exports = info;