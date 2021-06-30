/*
    ---------------------------------------------------------------------------
    @Basic Skeleton for any JS/Express application
    @v0.1
    @Toby Versteeg
    @CodeGorilla
    @december 2020

    This is a 'basic' skeleton (boilerplate) for any JS project.
    It uses Express, MongoDB, Mongoose and EJS templating and more libs.
    This boilerplate includes Bootstrap and jQuery as well to have a quick
    start on building responive websites.
    The folder structure is a basic setup to write clean code and seperates
    files into common folders like public/css, views, controllers, models etc.s
    ---------------------------------------------------------------------------
*/

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

const Hero = require('./models/lolBase');

mongoose.connect('mongodb://127.0.0.1:27017/lolBaseX', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db connected');
}).catch(err => {
    console.log(err);
});

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/heroes', async (req, res) => {
    const heroes = await Hero.find({})
    console.log(heroes);
    res.render('layouts/index', { heroes });
})

app.get('/heroes/:id', async (req, res) => {
    const { id } = req.params;
    const hero = await Hero.findById(id)
    console.log(hero);
    res.render('layouts/info', { hero });
})

app.listen(8080, () => {

})