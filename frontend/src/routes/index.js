import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from '../containers/home';
import AppContainer from '../containers/app';

export function getRoutes () {
	return (
		<div>
			<Route component={AppContainer} />
			<Switch>
				<Route
					path='/'
					component={HomeContainer}
				/>
			</Switch>
		</div>
	);
}
