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
            player.yards = parseFloat($(this).children('td:nth-child(9)').text().trim().replace(/,/g, ''));
            player.touchdowns = parseInt($(this).children('td:nth-child(12)').text().trim());
            player.interceptions = parseInt($(this).children('td:nth-child(13)').text().trim());
            player.rating = parseInt($(this).children('td:nth-child(20)').text().trim());
            stats.push(player);
        })
        cleanStats = stats.slice(1);
        res.json(cleanStats);
        // Passing.remove({}, () => {
        //     Passing.create(cleanStats).then(data => {
        //         console.log(data);
        //         res.json(data);
        //     })
        // });
    });
})

router.get('/scraperushing', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=RUSHING&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.player = $(this).children('td:nth-child(2)').text().trim();
            player.team = $(this).children('td:nth-child(3)').text().trim();
            player.attempts = parseInt($(this).children('td:nth-child(5)').text().trim());
            player.yards = parseFloat($(this).children('td:nth-child(7)').text().trim().replace(/,/g, ''));
            player.touchdowns = parseInt($(this).children('td:nth-child(10)').text().trim());
            player.fumbles = parseInt($(this).children('td:nth-child(16)').text().trim());
            stats.push(player);
        })
        cleanStats = stats.slice(1);
        res.json(cleanStats);
    });
})

router.get('/scrapereceiving', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=RECEIVING&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.player = $(this).children('td:nth-child(2)').text().trim();
            player.team = $(this).children('td:nth-child(3)').text().trim();
            player.receptions = parseInt($(this).children('td:nth-child(5)').text().trim());
            player.yards = parseFloat($(this).children('td:nth-child(6)').text().trim().replace(/,/g, ''));
            player.touchdowns = parseInt($(this).children('td:nth-child(10)').text().trim());
            player.fumbles = parseInt($(this).children('td:nth-child(15)').text().trim());
            stats.push(player);
        })
        cleanStats = stats.slice(1);
        res.json(cleanStats);
    });
})

router.get('/scrapetackles', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=TACKLES&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.player = $(this).children('td:nth-child(2)').text().trim();
            player.team = $(this).children('td:nth-child(3)').text().trim();
            player.position = $(this).children('td:nth-child(4)').text().trim();
            player.tackles = parseInt($(this).children('td:nth-child(5)').text().trim());
            player.solo = parseInt($(this).children('td:nth-child(6)').text().trim());
            player.assisted = parseFloat($(this).children('td:nth-child(7)').text().trim());
            player.sacks = parseInt($(this).children('td:nth-child(8)').text().trim());
            player.deflections = parseInt($(this).children('td:nth-child(10)').text().trim());
            player.interceptions = parseInt($(this).children('td:nth-child(11)').text().trim());
            player.fumbles = parseInt($(this).children('td:nth-child(15)').text().trim());
            stats.push(player);
        })
        cleanStats = stats.slice(2);
        res.json(cleanStats);
    });
})

router.get('/scrapesacks', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=SACKS&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.player = $(this).children('td:nth-child(2)').text().trim();
            player.team = $(this).children('td:nth-child(3)').text().trim();
            player.position = $(this).children('td:nth-child(4)').text().trim();
            player.tackles = parseInt($(this).children('td:nth-child(5)').text().trim());
            player.solo = parseInt($(this).children('td:nth-child(6)').text().trim());
            player.assisted = parseFloat($(this).children('td:nth-child(7)').text().trim());
            player.sacks = parseInt($(this).children('td:nth-child(8)').text().trim());
            player.deflections = parseInt($(this).children('td:nth-child(10)').text().trim());
            player.interceptions = parseInt($(this).children('td:nth-child(11)').text().trim());
            player.fumbles = parseInt($(this).children('td:nth-child(15)').text().trim());
            stats.push(player);
        })
        cleanStats = stats.slice(2);
        res.json(cleanStats);
    });
})

router.get('/scrapeinterceptions', (req, res) => {
    let baseUrl = "http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=INTERCEPTIONS&season=2017&seasonType=REG";
    let stats = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html.toString());
        $('table tr').each(function (i, td) {

            let player = {};
            player.player = $(this).children('td:nth-child(2)').text().trim();
            player.team = $(this).children('td:nth-child(3)').text().trim();
            player.position = $(this).children('td:nth-child(4)').text().trim();
            player.tackles = parseInt($(this).children('td:nth-child(5)').text().trim());
            player.solo = parseInt($(this).children('td:nth-child(6)').text().trim());
            player.assisted = parseFloat($(this).children('td:nth-child(7)').text().trim());
            player.sacks = parseInt($(this).children('td:nth-child(8)').text().trim());
            player.deflections = parseInt($(this).children('td:nth-child(10)').text().trim());
            player.interceptions = parseInt($(this).children('td:nth-child(11)').text().trim());
            player.touchdowns = parseInt($(this).children('td:nth-child(12)').text().trim());
            player.fumbles = parseInt($(this).children('td:nth-child(15)').text().trim());
            stats.push(player);
        })
        cleanStats = stats.slice(2);
        res.json(cleanStats);
    });
})

router.get('/scrapestandings', (req, res) => {
    let baseUrl = "http://www.espn.com/nfl/standings";
    let standings = [];

    request(baseUrl, function (err, response, html) {

        let $ = cheerio.load(html);
        $('.standings-row').each((i, row) => {

            let team = {}
            if (i < 4) { team.division = 'AFC East' };
            if (i >= 4 && i < 8) { team.division = 'AFC North' };
            if (i >= 8 && i < 12) { team.division = 'AFC South' };
            if (i >= 12 && i < 16) { team.division = 'AFC West' };
            if (i >= 16 && i < 20) { team.division = 'NFC East' };
            if (i >= 20 && i < 24) { team.division = 'NFC North' };
            if (i >= 24 && i < 28) { team.division = 'NFC South' };
            if (i >= 28 && i < 32) { team.division = 'NFC West' };
            if (i < 16) {
                team.conference = 'AFC';
            } else {
                team.conference = 'NFC';
            }
            team.team = $(row).children('td:nth-child(1)').children('a:nth-child(2)').children('span').text() != '' ? $(row).children('td:nth-child(1)').children('a:nth-child(2)').children('span').children('span').text() : $(row).children('td:nth-child(1)').children('a:nth-child(3)').children('span').children('span').text();
            team.wins = $(row).children('td:nth-child(2)').text();
            team.losses = $(row).children('td:nth-child(3)').text();
            team.ties = $(row).children('td:nth-child(4)').text();
            team.homeWins = $(row).children('td:nth-child(6)').text();
            team.roadWins = $(row).children('td:nth-child(7)').text();
            team.divisionWins = $(row).children('td:nth-child(8)').text();
            team.conferenceWins = $(row).children('td:nth-child(9)').text();
            team.pointsFor = $(row).children('td:nth-child(10)').text();
            team.pointsAgainst = $(row).children('td:nth-child(11)').text();
            team.streak = $(row).children('td:nth-child(13)').text();
            standings.push(team);
        });
        console.log(standings);
        res.json(standings);        
    })
})

// router.get('/getpassing', (req, res) => {
//     Passing.find({}).then(data => {
//         res.json(data);
//     })
// })

module.exports = router;