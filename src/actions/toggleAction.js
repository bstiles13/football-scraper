export const toggleStandings = (view) => {
    return {
        type: 'SET_TOGGLE',
        payload: {
            toggleStandings: view
        }
    }
}

export const toggleYear = (year) => {
    return {
        type: 'SET_TOGGLE',
        payload: {
            toggleYear: year
        }
    }
}