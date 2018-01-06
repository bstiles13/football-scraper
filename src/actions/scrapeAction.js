import axios from 'axios';

export const scrapePassing = (year) => {
    return function (dispatch) {
        axios.get('/scrapepassing/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    passing: data.data
                }
            })
        });
    }
}

export const scrapeRushing = (year) => {
    return function (dispatch) {
        axios.get('/scraperushing/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    rushing: data.data
                }
            })
        });
    }
}

export const scrapeReceiving = (year) => {
    return function (dispatch) {
        axios.get('/scrapereceiving/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    receiving: data.data
                }
            })
        });
    }
}

export const scrapeTackles = (year) => {
    return function (dispatch) {
        axios.get('/scrapetackles/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    tackles: data.data
                }
            })
        });
    }
}

export const scrapeSacks = (year) => {
    return function (dispatch) {
        axios.get('/scrapesacks/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    sacks: data.data
                }
            })
        });
    }
}

export const scrapeInterceptions = (year) => {
    return function (dispatch) {
        axios.get('/scrapeinterceptions/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    interceptions: data.data
                }
            })
        });
    }
}

export const scrapeStandings = (year) => {
    return function (dispatch) {
        axios.get('/scrapestandings/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    standings: data.data
                }
            })
        })
    }
}

export const scrapeOffenseTotal = (year) => {
    return function (dispatch) {
        axios.get('/scrapeoffensetotal/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offenseTotal: data.data
                }
            })
        })
    }
}

export const scrapeOffensePassing = (year) => {
    return function (dispatch) {
        axios.get('/scrapeoffensepassing/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offensePassingg: data.data
                }
            })
        })
    }
}

export const scrapeOffenseRushing = (year) => {
    return function (dispatch) {
        axios.get('/scrapeoffenserushing/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offenseRushing: data.data
                }
            })
        })
    }
}

export const scrapeOffenseReceiving = (year) => {
    console.log('doing');
    return function (dispatch) {
        axios.get('/scrapeoffensereceiving/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offenseReceiving: data.data
                }
            })
        })
    }
}

export const scrapeDefenseTotal = (year) => {
    return function (dispatch) {
        axios.get('/scrapedefensetotal/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    defenseTotal: data.data
                }
            })
        })
    }
}

export const scrapeDefenseSkill = (year) => {
    return function (dispatch) {
        axios.get('/scrapedefensedetail/' + year).then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    defenseDetail: data.data
                }
            })
        })
    }
}