import axios from 'axios';

export const scrapePassing = () => {
    return function (dispatch) {
        axios.get('/scrapepassing').then(data => {
            axios.get('/getpassing').then(data => {
                dispatch({
                    type: 'SCRAPE',
                    payload: {
                        passing: data.data
                    }
                })
            })
        });
    }
}