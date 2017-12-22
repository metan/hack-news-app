import { put, call } from 'redux-saga/effects';
import { getNews, getArticle } from '../api/newsApi';
import { loadNewsSuccess, loadNewsFailed, loadArticleSuccess, loadArticleFailed } from '../actions/newsActions';

export function* loadNewsSaga() {
    try {
        const response = yield call(getNews);
        yield put(loadNewsSuccess(response.data));
    } catch (error) {
        yield put(loadNewsFailed(error));
    }
}

export function* loadArticleSaga(action) {
    try {
        const response = yield call(getArticle, action.id);
        yield put(loadArticleSuccess(response.data));
    } catch (error) {
        yield put(loadArticleFailed(error));
    }
}