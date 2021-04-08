const express = require('express');
const Hero = require('../models/hero');

const router = express.Router();

router.get('/', (req, res) => {
    Hero.find().sort({ createdAt:-1 })
    .then((result) => {
        res.render('index', { title : 'Home', heroes : result });
    })
    .catch(err => console.log(err));
});

router.get('/about',(req,res)=>{
    res.render('about', { title : "About" });
});

router.get('/heroes', (req,res) => res.redirect('/'));

router.get('/heroes/add', (req,res)=>{
    res.render('create', { title: "Add Hero" });
});

router.post('/heroes', (req,res) => {
    const hero = new Hero(req.body)
    hero.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
});

router.get('/heroes/:id', (req,res) => {
    const id = req.params.id;
    Hero.findById(id)
        .then(result => {
            res.render('details', { title : result.hname, hero : result });
        })
        .catch(err => console.log(err));
});

router.delete('/heroes/:id', (req,res) => {
    const id = req.params.id;
    Hero.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' });
        })
        .catch(err => console.log(err));
});

module.exports = router;