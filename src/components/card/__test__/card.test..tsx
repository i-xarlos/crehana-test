import React from 'react';
//import ReactDOM from 'react-dom';
import { Card } from '../card.component';
import { render } from '@testing-library/react';
// import { isTSAnyKeyword } from '@babel/types';

test('render without crashing', () => {
	const component = render(
		<Card name="Carlos" email="ixarlos@gmail.com"></Card>,
	);

	let tree = component;
	expect(tree).toMatchSnapshot();
});
