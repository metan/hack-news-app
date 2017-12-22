/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from './store/configureStore';
import { loadHackNews } from './actions/newsActions';
import routes from './routes';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


const store = configureStore();

render(
    <Provider store={store}>
		<Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
