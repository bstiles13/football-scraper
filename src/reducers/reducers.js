import { combineReducers } from 'redux';
import scrapeReducer from './scrapeReducer';

const reducers = combineReducers({
    stats: scrapeReducer
})

export default reducers;