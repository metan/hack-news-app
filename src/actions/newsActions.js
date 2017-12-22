import * as types from '../constants/actions';

export function loadNews() {
    console.log('load news action fired!');
    return { type: types.LOAD_NEWS_REQUEST };
}
export function loadNewsSuccess(news) {
    console.log(news);
    return { type: types.LOAD_NEWS_SUCCESS, news };
}
export function loadNewsFailed() {
    return { type: types.LOAD_NEWS_FAILED };
}

export function loadArticle(id) {
    return { type: types.LOAD_ARTICLE_REQUEST, id: id };
}
export function loadArticleSuccess(article) {
    return { type: types.LOAD_ARTICLE_SUCCESS, article };
}
export function loadArticleFailed() {
    return { type: types.LOAD_ARTICLE_FAILED };
}
