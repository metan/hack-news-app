import {combineReducers} from 'redux';
import news from './newsReducer';
import article from './articleReducer';

const rootReducer = combineReducers({
    news,
    article
});

export default rootReducer;