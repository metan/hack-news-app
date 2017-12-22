import * as types from '../constants/actions';
import initialState from './initialState';
import _ from 'lodash';

export default function newsReducer(state = initialState.news, action) {
    switch (action.type) {
        case types.LOAD_NEWS_REQUEST:
            return Object.assign({}, state, {loading: true, data:[]});
        case types.LOAD_NEWS_SUCCESS:
            return Object.assign({}, state, {data: action.news, loading: false});
        case types.LOAD_NEWS_FAILED:
            return Object.assign({}, state, {loading: false, error: true});

        default:
            return state;
    }
}