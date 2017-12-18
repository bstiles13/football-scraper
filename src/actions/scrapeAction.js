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