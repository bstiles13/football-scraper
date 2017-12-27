const express = require('express');
const router = new express.Router();
const controller = require('../controller/controller.js');

router.get('/scrapestandings/:year', controller.scrapeStandings);

router.get('/scrapepassing/:year', controller.scrapePassing);

router.get('/scraperushing/:year', controller.scrapeRushing);

router.get('/scrapereceiving/:year', controller.scrapeReceiving);

router.get('/scrapetackles/:year', controller.scrapeTackles);

router.get('/scrapesacks/:year', controller.scrapeSacks);

router.get('/scrapeinterceptions/:year', controller.scrapeInterceptions);

router.get('/scrapeoffensetotal/:year', controller.scrapeOffenseTotal);

router.get('/scrapeoffensepassing/:year', controller.scrapeOffensePassing);

router.get('/scrapeoffenserushing/:year', controller.scrapeOffenseRushing);

router.get('/scrapeoffensereceiving/:year', controller.scrapeOffenseReceiving);

router.get('/scrapedefensetotal/:year', controller.scrapeDefenseTotal);

router.get('/scrapedefensedetail/:year', controller.scrapeDefenseDetail);

module.exports = router;