import axios from 'axios';

export const scrapePassing = () => {
    return function (dispatch) {
        axios.get('/scrapepassing').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    passing: data.data
                }
            })
        });
    }
}

export const scrapeRushing = () => {
    return function (dispatch) {
        axios.get('/scraperushing').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    rushing: data.data
                }
            })
        });
    }
}

export const scrapeReceiving = () => {
    return function (dispatch) {
        axios.get('/scrapereceiving').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    receiving: data.data
                }
            })
        });
    }
}

export const scrapeTackles = () => {
    return function (dispatch) {
        axios.get('/scrapetackles').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    tackles: data.data
                }
            })
        });
    }
}

export const scrapeSacks = () => {
    return function (dispatch) {
        axios.get('/scrapesacks').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    sacks: data.data
                }
            })
        });
    }
}

export const scrapeInterceptions = () => {
    return function (dispatch) {
        axios.get('/scrapeinterceptions').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    interceptions: data.data
                }
            })
        });
    }
}

export const scrapeStandings = () => {
    return function (dispatch) {
        axios.get('/scrapestandings').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    standings: data.data
                }
            })
        })
    }
}

export const scrapeOffenseTotal = () => {
    return function (dispatch) {
        axios.get('/scrapeoffensetotal').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offenseTotal: data.data
                }
            })
        })
    }
}

export const scrapeOffensePassing = () => {
    return function (dispatch) {
        axios.get('/scrapeoffensepassing').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offensePassingg: data.data
                }
            })
        })
    }
}

export const scrapeOffenseRushing = () => {
    return function (dispatch) {
        axios.get('/scrapeoffenserushing').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offenseRushing: data.data
                }
            })
        })
    }
}

export const scrapeOffenseReceiving = () => {
    console.log('doing');
    return function (dispatch) {
        axios.get('/scrapeoffensereceiving').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    offenseReceiving: data.data
                }
            })
        })
    }
}

export const scrapeDefenseTotal = () => {
    return function (dispatch) {
        axios.get('/scrapedefensetotal').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    defenseTotal: data.data
                }
            })
        })
    }
}

export const scrapeDefenseDetail = () => {
    return function (dispatch) {
        axios.get('/scrapedefensedetail').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    defenseDetail: data.data
                }
            })
        })
    }
}