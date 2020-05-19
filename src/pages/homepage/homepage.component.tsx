import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import SearchBox from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';
import SelectBox from '../../components/select-box/select-box.component';
import './homepage.styles.scss';
// import moment from 'moment';

const DATA_QUERY = gql`
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
		countries {
			id
			name
		}

		companies {
			id
			name
		}
	}
`;

const HomePage = () => {
	const { loading, error, data } = useQuery(DATA_QUERY);
	const [text, setText] = useState('');
	const [countryId, setCountryId] = useState('');
	const [companyId, setCompanyId] = useState('');
	const [recently, setRecently] = useState(true);

	const handleInputChange = (e: string) => {
		setText(e);
	};

	const handleSelectChange = (e: string, name: string) => {
		switch (name.toLowerCase()) {
			case 'country':
				setCountryId(e);
				break;
			case 'company':
				setCompanyId(e);
				break;
			case 'date':
				setRecently(Number(e) === 1);
				break;
			default:
				break;
		}
		console.log(name);
	};

	if (loading)
		return (
			<div className="loading">
				<h1>#FindYourJob </h1>
				<p>Loading...</p>
			</div>
		);
	if (error) return <div className="error">Error : {error} </div>;

	const listJobs = () => {
		console.log(recently);
		const search = data.jobs
			.filter((job: any) => {
				return (
					job.title.toLowerCase().includes(text.toLowerCase()) &&
					JSON.stringify(job.countries).includes(countryId) &&
					JSON.stringify(job.company).includes(companyId)
				);
			})
			.sort((a: any, b: any) => {
				const aDate: Date = new Date(a.postedAt);
				const bDate: Date = new Date(b.postedAt);
				return recently
					? bDate.getTime() - aDate.getTime()
					: aDate.getTime() - bDate.getTime();
			});

		return <CardList search={search} />;
	};

	return (
		<div className="home-page">
			<h1>#FindYourJob</h1>
			<header className="header-home-page">
				<div>
					<SearchBox onChange={handleInputChange} />
				</div>

				<div>
					<SelectBox
						onChange={handleSelectChange}
						data={data.countries}
						name="Country"
					/>
					<SelectBox
						onChange={handleSelectChange}
						data={data.companies}
						name="Company"
					/>
					<SelectBox
						onChange={handleSelectChange}
						data={[
							{ id: 1, name: 'Recently' },
							{ id: 2, name: 'Oldest' },
						]}
						name="Date"
					/>
				</div>
			</header>

			{listJobs()}
		</div>
	);
};
export default HomePage;
