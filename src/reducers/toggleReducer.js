export default function (state = {
    toggleStandings: 'division',
    toggleYear: 2017
}, action) {
    switch (action.type) {
        case 'SET_TOGGLE':
            state = { ...state, ...action.payload }
            break;
    }
    return state;
}