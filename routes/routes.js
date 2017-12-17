const express = require('express');
const router = new express.Router();
const request = require('request');
const cheerio = require('cheerio');

router.get('/passing', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=PASSING&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (error, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.name = $(this).children('td:nth-child(2)').text().trim();
            player.yards = $(this).children('td:nth-child(9)').text().trim();
            player.touchdowns = $(this).children('td:nth-child(12)').text().trim();
            player.interceptions = $(this).children('td:nth-child(13)').text().trim();                
            stats.push(player);
        })
        console.log(stats);
        res.send(stats);
    });
})

module.exports = router;