const PORT = process.env.PORT || 3000 ;
const express = require('express');
const info = require('./info');
const mongoose = require('mongoose');
const Hero = require('./models/hero');

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
    Hero.find().sort({ createdAt:-1 })
    .then((result) => {
        res.render('index', { title : 'Home', heroes : result });
    })
    .catch(err => console.log(err));
});

app.get('/about',(req,res)=>{
    res.render('about', { title : "About" });
});

app.get('/heroes/add', (req,res)=>{
    res.render('create', { title: "Add Hero" });
});

app.use((req,res) => res.status(404).render('404', { title : "404" }));