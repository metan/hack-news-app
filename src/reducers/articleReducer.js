import * as types from '../constants/actions';
import initialState from './initialState';
import _ from 'lodash';

export default function articleReducer(state = initialState.article, action) {
    switch (action.type) {
        case types.LOAD_ARTICLE_REQUEST:
            return Object.assign({}, state, {loading: true, data:[]});
        case types.LOAD_ARTICLE_SUCCESS:
            return Object.assign({}, state, {data: action.article, loading: false});
        case types.LOAD_ARTICLE_FAILED:
            return Object.assign({}, state, {loading: false, error: true});

        default:
            return state;
    }
}