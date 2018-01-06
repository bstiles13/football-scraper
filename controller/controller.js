const request = require('request');
const cheerio = require('cheerio');
const Passing = require('../models/passing.js');

const controller = {

    scrapeStandings: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.espn.com/nfl/standings/_/season/' + year;
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
                if ($(row).children('td:nth-child(1)').children('a:nth-child(2)').children('span').text() != '') {
                    team.team = $(row).children('td:nth-child(1)').children('a:nth-child(2)').children('span').children('span').text();
                } else if ($(row).children('td:nth-child(1)').children('a:nth-child(3)').children('span').children('span').text() != '') {
                    team.team = $(row).children('td:nth-child(1)').children('a:nth-child(3)').children('span').children('span').text();
                } else {
                    team.team = $(row).children('td:nth-child(1)').children('span:nth-child(2)').children('span').text();
                }
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
            res.json(standings);
        })
    },

    scrapePassing: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=PASSING&season=' + year + '&seasonType=REG';
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
    },

    scrapeRushing: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=RUSHING&season=' + year + '&seasonType=REG';
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
    },

    scrapeReceiving: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=RECEIVING&season=' + year + '&seasonType=REG';
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
    },

    scrapeTackles: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=TACKLES&season=' + year + '&seasonType=REG';
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
    },

    scrapeSacks: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=SACKS&season=' + year + '&seasonType=REG';
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
    },

    scrapeInterceptions: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.nfl.com/stats/categorystats?tabSeq=0&statisticCategory=INTERCEPTIONS&season=' + year + '&seasonType=REG';
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
    },

    scrapeOffenseTotal: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.espn.com/nfl/statistics/team/_/stat/total/year/' + year;
        let stats = [];

        request(baseUrl, function (err, response, html) {

            let $ = cheerio.load(html.toString());
            $('table tr').each(function (i, row) {

                let team = {};
                team.team = $(row).children('td:nth-child(2)').children('a').text();
                team.yards = parseInt($(row).children('td:nth-child(3)').text().replace(/,/g, ''));
                team.averageTotal = parseInt($(row).children('td:nth-child(4)').text());
                team.yardsPass = parseInt($(row).children('td:nth-child(5)').text().replace(/,/g, ''));
                team.averagePass = parseInt($(row).children('td:nth-child(6)').text());
                team.yardsRush = parseInt($(row).children('td:nth-child(7)').text().replace(/,/g, ''));
                team.averageRush = parseInt($(row).children('td:nth-child(8)').text());
                team.points = parseInt($(row).children('td:nth-child(9)').text());
                team.averagePoints = parseInt($(row).children('td:nth-child(10)').text());
                stats.push(team);
            })
            stats = stats.slice(1);
            res.json(stats);
        });
    },

    scrapeOffensePassing: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.espn.com/nfl/statistics/team/_/stat/passing/year/' + year;
        let stats = [];

        request(baseUrl, function (err, response, html) {

            let $ = cheerio.load(html.toString());
            $('table tr').each(function (i, row) {

                let team = {};
                team.team = $(row).children('td:nth-child(2)').children('a').text();
                team.yards = parseInt($(row).children('td:nth-child(6)').text().replace(/,/g, ''));
                team.touchdowns = parseInt($(row).children('td:nth-child(9)').text());
                team.interceptions = parseInt($(row).children('td:nth-child(10)').text());
                team.sacks = parseInt($(row).children('td:nth-child(11)').text());
                team.rating = parseInt($(row).children('td:nth-child(13)').text());
                team.yardsPerGame = parseInt($(row).children('td:nth-child(14)').text());
                stats.push(team);
            })
            stats = stats.slice(1);
            res.json(stats);
        });
    },

    scrapeOffenseRushing: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.espn.com/nfl/statistics/team/_/stat/rushing/year/' + year;
        let stats = [];

        request(baseUrl, function (err, response, html) {

            let $ = cheerio.load(html.toString());
            $('table tr').each(function (i, row) {

                let team = {};
                team.team = $(row).children('td:nth-child(2)').children('a').text();
                team.attempts = parseInt($(row).children('td:nth-child(3)').text());
                team.yards = parseInt($(row).children('td:nth-child(4)').text().replace(/,/g, ''));
                team.averagePerAttempt = parseInt($(row).children('td:nth-child(5)').text());
                team.touchdowns = parseInt($(row).children('td:nth-child(7)').text());
                team.averagePerGame = parseInt($(row).children('td:nth-child(8)').text());
                team.fumbles = parseInt($(row).children('td:nth-child(9)').text());
                team.lost = parseInt($(row).children('td:nth-child(10)').text());
                stats.push(team);
            })
            stats = stats.slice(1);
            res.json(stats);
        });
    },

    scrapeOffenseReceiving: (req, res) => {
        let year = req.params.year;
        console.log('receiving');

        let baseUrl = 'http://www.espn.com/nfl/statistics/team/_/stat/receiving/year/' + year;
        let stats = [];

        request(baseUrl, function (err, response, html) {

            let $ = cheerio.load(html.toString());
            $('table tr').each(function (i, row) {

                let team = {};
                team.team = $(row).children('td:nth-child(2)').children('a').text();
                team.receptions = parseInt($(row).children('td:nth-child(3)').text());
                team.yards = parseInt($(row).children('td:nth-child(4)').text().replace(/,/g, ''));
                team.averagePerReception = parseInt($(row).children('td:nth-child(5)').text());
                team.touchdowns = parseInt($(row).children('td:nth-child(7)').text());
                team.averagePerGame = parseInt($(row).children('td:nth-child(8)').text());
                team.fumbles = parseInt($(row).children('td:nth-child(9)').text());
                team.lost = parseInt($(row).children('td:nth-child(10)').text());
                stats.push(team);
            })
            console.log('receiving');
            stats = stats.slice(1);
            res.json(stats);
        });
    },

    scrapeDefenseTotal: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.espn.com/nfl/statistics/team/_/stat/total/position/defense/year/' + year;
        let stats = [];

        request(baseUrl, function (err, response, html) {

            let $ = cheerio.load(html.toString());
            $('table tr').each(function (i, row) {

                let team = {};
                team.team = $(row).children('td:nth-child(2)').children('a').text();
                team.yards = parseInt($(row).children('td:nth-child(3)').text().replace(/,/g, ''));
                team.averageTotal = parseInt($(row).children('td:nth-child(4)').text());
                team.yardsPass = parseInt($(row).children('td:nth-child(5)').text().replace(/,/g, ''));
                team.averagePass = parseInt($(row).children('td:nth-child(6)').text());
                team.yardsRush = parseInt($(row).children('td:nth-child(7)').text().replace(/,/g, ''));
                team.averageRush = parseInt($(row).children('td:nth-child(4)').text());
                team.points = parseInt($(row).children('td:nth-child(9)').text());
                team.averagePoints = parseInt($(row).children('td:nth-child(10)').text());
                stats.push(team);
            })
            stats = stats.slice(1);
            res.json(stats);
        });
    },

    scrapeDefenseDetail: (req, res) => {
        let year = req.params.year;
        let baseUrl = 'http://www.espn.com/nfl/statistics/team/_/stat/defense/position/defense/year/' + year;
        let stats = [];

        request(baseUrl, function (err, response, html) {

            let $ = cheerio.load(html.toString());
            $('table tr').each(function (i, row) {

                let team = {};
                team.team = $(row).children('td:nth-child(2)').children('a').text();
                team.tackles = parseInt($(row).children('td:nth-child(5)').text().replace(/,/g, ''));
                team.sacks = parseInt($(row).children('td:nth-child(6)').text());
                team.interceptions = parseInt($(row).children('td:nth-child(9)').text());
                team.interceptionTouchdowns = parseInt($(row).children('td:nth-child(12)').text());
                team.fumbles = parseInt($(row).children('td:nth-child(14)').text());
                team.fumblesTouchdowns = parseInt($(row).children('td:nth-child(15)').text());
                stats.push(team);
            })
            stats = stats.slice(2);
            res.json(stats);
        });
    }

}



module.exports = controller;