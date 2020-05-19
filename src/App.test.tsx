import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from './graphql';
import App from './App';

/*describe('App', () => {
	test('verify validation', () => {});
	test('submit data', () => {});
});*/

test('loads and displays App.tsx', async () => {
	const { debug } = render(
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>,
	);
	debug();
});
