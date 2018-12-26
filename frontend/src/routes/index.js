import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContainer from '../containers/app';

export function getRoutes () {
	return (
		<Switch>
			<Route path="/" component={AppContainer} />
		</Switch>
	);
}
