import { combineReducers } from 'redux';
import scrapeReducer from './scrapeReducer';
import toggleReducer from './toggleReducer';

const reducers = combineReducers({
    stats: scrapeReducer,
    toggles: toggleReducer
})

export default reducers;