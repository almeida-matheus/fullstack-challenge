import React from 'react';
import ReactDOM from 'react-dom';
import Component from './index.jsx';

it('App container is rendering without crashes', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Component />, div);
	ReactDOM.unmountComponentAtNode(div);
});
