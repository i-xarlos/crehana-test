import React from 'react';
import './card-list.style.scss';
import { Card } from '../card/card.component';

export function CardList(props: any) {
	const { search } = props;
	return (
		<div className="card-list">
			{search.map((job: any, key: number) => {
				return (
					<Card
						key={key}
						{...job}
						name={job.title}
						email={job.email}
					/>
				);
			})}
		</div>
	);
}
