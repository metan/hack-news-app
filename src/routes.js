import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HackNews from './components/HackNews';
import Article from './components/Article';

export default (
  <Route path="/" component={App}>
		<IndexRoute component={HackNews} />
    <Route path="article" component={Article} />
	</Route>
);
