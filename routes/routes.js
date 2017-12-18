const express = require('express');
const router = new express.Router();
const request = require('request');
const cheerio = require('cheerio');
const Passing = require('../models/passing.js');

router.get('/scrapepassing', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=PASSING&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.player = $(this).children('td:nth-child(2)').text().trim();
            player.team = $(this).children('td:nth-child(3)').text().trim();            
            player.completions = parseInt($(this).children('td:nth-child(5)').text().trim());
            player.attempts = parseInt($(this).children('td:nth-child(6)').text().trim());            
            player.yards = parseFloat( $(this).children('td:nth-child(9)').text().trim().replace(/,/g,'') );
            player.touchdowns = parseInt($(this).children('td:nth-child(12)').text().trim());
            player.interceptions = parseInt($(this).children('td:nth-child(13)').text().trim());
            player.rating = parseInt($(this).children('td:nth-child(20)').text().trim());                            
            stats.push(player);
        })
        cleanStats = stats.slice(1);
        console.log(cleanStats);        
        Passing.remove({}, () => {
            Passing.create(cleanStats).then(data => {
                console.log(data);
                res.json(data);
            })
        });
    });
})

router.get('/getpassing', (req, res) => {
    Passing.find({}).then(data => {
        res.json(data);
    })
})

module.exports = router;