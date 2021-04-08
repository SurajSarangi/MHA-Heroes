const express = require('express');
const controllers = require('../controllers/heroController');

const router = express.Router();

router.get('/', (req, res) => controllers.hero_list(req,res));

router.get('/about',(req,res) => res.render('about', { title : "About" }));

router.get('/heroes', (req,res) => res.redirect('/'));

router.get('/heroes/add', (req,res) => controllers.hero_add_get(req,res));

router.post('/heroes', (req,res) => controllers.hero_add_post(req,res));

router.get('/heroes/:id', (req,res) => controllers.hero_details(req,res));

router.delete('/heroes/:id', (req,res) => controllers.hero_delete(req,res));

module.exports = router;