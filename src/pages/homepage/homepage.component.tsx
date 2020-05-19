import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SearchBox from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';
import SelectBox from '../../components/select-box/select-box.component';
import './homepage.styles.scss';

const JOBS = gql`
	{
		jobs {
			id
			title
			userEmail
			isPublished
			postedAt
			company {
				id
				name
			}
			countries {
				id
				name
			}
		}
	}
`;

const HomePage = () => {
	const { loading, error, data } = useQuery(JOBS);
	const [text, setText] = useState('');
	const handleChange = (e: string) => {
		setText(e);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const listJobs = () => {
		const search = data.jobs.filter((job: any) =>
			job.title.toLowerCase().includes(text.toLowerCase()),
		);
		return <CardList search={search} />;
	};

	return (
		<div className="home-page">
			<h1>Find your job</h1>
			<header className="header-home-page">
				<SearchBox onChange={handleChange} />
				<SelectBox />
				<SelectBox />
				<SelectBox />
			</header>

			{listJobs()}
		</div>
	);
};
export default HomePage;
