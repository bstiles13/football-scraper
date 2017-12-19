export const toggleStandings = (view) => {
    return {
        type: 'SET_TOGGLE',
        payload: {
            toggleStandings: view
        }
    }
}