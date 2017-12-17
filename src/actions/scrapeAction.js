import axios from 'axios';

export const scrapePassing = () => {
    return function (dispatch) {
        axios.get('/passing').then(data => {
            dispatch({
                type: 'SCRAPE',
                payload: {
                    passing: data.data
                }
            })
        });
    }
}