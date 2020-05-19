import React from 'react';
import {
	render,
	fireEvent,
	waitFor,
	screen,
	waitForDomChange,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../graphql';
import SelectBox from './select-box.component';

const data: any = {
	countries: [
		{
			id: 'cjtu8et1z001408247jcz8n6r',
			name: 'United States',
		},
		{
			id: 'cjuv50xbq00f00735tff3nbux',
			name: 'Germany',
		},
		{
			id: 'cjuvb0p9301680735uwpmxycl',
			name: 'United Kingdom',
		},
		{
			id: 'cjuve0nca022g0735kifjrh49',
			name: 'Canada',
		},
	],
};

test('loads and displays search-box.tsx', async () => {
	const { debug, getByTestId, getByText } = render(
		<ApolloProvider client={client}>
			<SelectBox name="Countries" data={data.countries} />,
		</ApolloProvider>,
	);

	const selectbox = getByTestId('select-box');
	fireEvent.change(selectbox);
	getByText('Canada');
	debug();
});
