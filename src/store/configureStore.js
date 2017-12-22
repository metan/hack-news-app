import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {

		const sagaMiddleware = createSagaMiddleware();
		const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

		sagaMiddleware.run(rootSaga);

    return store;
}
