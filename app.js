const PORT = process.env.PORT || 3000 ;
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`));

app.get('/', (req, res) => {
    res.render('index', { title : 'Home' });
});

app.get('/about',(req,res)=>{
    res.render('about', { title : "About" });
});

app.get('/blogs/add', (req,res)=>{
    res.render('create', { title: "Add Hero" });
});

app.use((req,res) => res.status(404).render('404', { title : "404" }));