__path = process.cwd()

var express = require('express');

var router = express.Router();

router.get('/', (req, res) => {

    res.sendFile(__path + '/views/home.html')

})

router.get('/api', (req, res) => {

    res.sendFile(__path + '/views/index.html')

})

router.get('/admin', (req, res) => {

    res.sendFile(__path + '/views/NasaXone.Htm')

})

router.get('/api/about', (req, res) => {

    res.sendFile(__path + '/views/about.html')

})

router.get('/api/covid-id', (req, res) => {

    res.sendFile(__path + '/views/covid.html')

})

router.get('/api/cuaca-id', (req, res) => {

    res.sendFile(__path + '/views/cuaca.html')

})

router.get('/admin/admin', (req, res) => {

    res.sendFile(__path + '/views/NasaXone.Htm')

})

router.get('/api/news', (req, res) => {

    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')

})

router.get('/config', (req, res) => {

    config = {

        status: true,

        result: {

            prefix : '/',

            namabot: 'NasaBot',

            namaowner: 'Marvell',

            instagram: 'nasa_bot',

            youtube : 'nasabot'

        }

    }

    res.json(config)

})

module.exports = router

