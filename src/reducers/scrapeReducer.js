export default function (state = null, action) {
    switch (action.type) {
        case 'SCRAPE':
            state = { ...state, ...action.payload }
            break;
    }
    return state;
}