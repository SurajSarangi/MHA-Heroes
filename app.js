const PORT = process.env.PORT || 3000 ;
const express = require('express');
const info = require('./info');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://greyKnight:1234@node-ninja.6awgg.gcp.mongodb.net/db1?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`)))
    .catch(err => console.log(err,'\n'));


app.set('view engine', 'ejs');

app.use((req,res,next) => {
    info(req);
    next();
});

app.use(express.static('./public'));

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