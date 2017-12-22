import newsReducer from '../../src/reducers/newsReducer';
import * as newsActions from '../../src/actions/newsActions';
import initialState from '../../src/reducers/initialState';

describe('newsReducer', () => {
    const initialNews = initialState.news;

    it('should return the initial state', () => {
        expect(newsReducer(undefined, {})).toEqual(initialNews);
    });

    it('should handle LOAD_NEWS_REQUEST and set loading to true', () => {
        const action = newsActions.loadNews();
        const expected = { data: [], loading: true, error: false };
        const actual = newsReducer(initialNews, action);

        expect(actual).toEqual(expected);
    });

    it('should handle LOAD_NEWS_SUCCESS and load news table', () => {
        const news = [
            15988238, 15987639
        ];

        const action = newsActions.loadNewsSuccess(news);
        const expected = { data: news, loading: false, error: false };
        const actual = newsReducer(initialNews, action);

        expect(actual).toEqual(expected);
    });

    it('should handle LOAD_NEWS_FAILED and set error to true', () => {
        const action = newsActions.loadNewsFailed();
        const expected = { data: [], loading: false, error: true };
        const actual = newsReducer(initialNews, action);

        expect(actual).toEqual(expected);
    });

});


