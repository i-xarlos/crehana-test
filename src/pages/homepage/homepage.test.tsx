import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../../graphql';
import HomePage from './homepage.component';

test('loads and displays HomePage.tsx', async () => {
	const { debug } = render(
		<ApolloProvider client={client}>
			<HomePage />
		</ApolloProvider>,
	);
	debug();
});
