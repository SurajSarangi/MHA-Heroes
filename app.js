const PORT = process.env.PORT || 3000 ;
const express = require('express');
const info = require('./info');
const app = express();

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`));

app.use((req,res,next) => {
    info(req);
    next();
});

app.get('/', (req, res) => {

    const blogs = [
        {hname: 'All Might', rname: 'Toshinori', quirk: 'One for All', status: 'Pro'},
        {hname: 'Eraser', rname: 'Aizawa', quirk: 'Erasing quirks', status: 'Pro'},
        {hname: 'Ingenium', rname: 'Ida', quirk: 'Nitro legs', status: 'Rookie'}
    ];

    res.render('index', { title : 'Home', blogs });
});

app.get('/about',(req,res)=>{
    res.render('about', { title : "About" });
});

app.get('/blogs/add', (req,res)=>{
    res.render('create', { title: "Add Hero" });
});

app.use((req,res) => res.status(404).render('404', { title : "404" }));