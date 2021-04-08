const Hero = require('../models/hero');

const hero_list = (req, res) => {
    Hero.find().sort({ createdAt:-1 })
    .then((result) => {
        res.render('index', { title : 'Home', heroes : result });
    })
    .catch(err => console.log(err));
};

const hero_add_get = (req, res) => {
    res.render('create', { title: "Add Hero" });
};

const hero_add_post = (req, res) => {
    const hero = new Hero(req.body)
    hero.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};

const hero_details = (req, res) => {
    const id = req.params.id;
    Hero.findById(id)
        .then(result => {
            res.render('details', { title : result.hname, hero : result });
        })
        .catch(err => res.render('404', { title : 'Not Found' }));
};

const hero_delete = (req, res) => {
    const id = req.params.id;
    Hero.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' });
        })
        .catch(err => console.log(err));
};

module.exports = {
    hero_list,
    hero_add_get,
    hero_add_post,
    hero_details,
    hero_delete
};