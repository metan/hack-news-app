import { takeEvery } from 'redux-saga/effects';
import { loadNewsSaga, loadArticleSaga } from './newsSaga';
import * as ActionTypes from '../constants/actions';

export function* watchLoadNews() {
    yield takeEvery(ActionTypes.LOAD_NEWS_REQUEST, loadNewsSaga);
}

export function* watchLoadArticle() {
    yield takeEvery(ActionTypes.LOAD_ARTICLE_REQUEST, loadArticleSaga);
}

export default function* rootSaga() {
    yield [
        watchLoadNews(),
        watchLoadArticle(),
    ];
}
