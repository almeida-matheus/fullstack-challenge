import React from 'react';
import { Router, Route } from 'react-router';
import AppContainer from '../containers/app';

export function getRoutes () {
	return (
		<Router>
			<Route path="/" component={AppContainer}>
			</Route>
		</Router>
	);
}
