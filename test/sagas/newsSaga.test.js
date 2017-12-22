import { put, call } from 'redux-saga/effects';
import * as newsSaga from '../../src/sagas/newsSaga';
import * as newsApi from '../../src/api/newsApi';
import * as actions from '../../src/actions/newsActions';

describe('loadNewsSaga', () => {

    let next;
    const generator = newsSaga.loadNewsSaga();
    const response = {
        data: [
                15988238, 15987639
            ]
        
    };

    const error = {
        response: {
            data: {
                message: 'error'
            },
            status: ''
        }
    };

    it('should call remote API', () => {
        next = generator.next();

        expect(next.value).toEqual(call(newsApi.getNews));
    });

    it('should load news successfully', () => {
        next = generator.next(response);

        expect(next.value).toEqual(
            put(actions.loadNewsSuccess(response.data))
        );
    });

    it('should load news failure', () => {
        next = generator.throw(error);

        expect(next.value).toEqual(put(actions.loadNewsFailed(error)));
    });

});




