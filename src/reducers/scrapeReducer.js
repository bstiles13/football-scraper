export default function (state = {
    passing: null,
    rushing: null,
    receiving: null,
    tackles: null,
    sacks: null,
    interceptions: null
}, action) {
    switch (action.type) {
        case 'SCRAPE':
            state = { ...state, ...action.payload }
            break;
    }
    return state;
}