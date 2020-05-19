import React from 'react';
import close from '../../assets/close.png';
import moment from 'moment';
import './card.styles.scss';

export function Card(props: any) {
	const { id, title, children, onClick, className, ...otherProps } = props;
	return (
		<div
			className={`card-container ${className ? className : ''}`}
			onClick={onClick}
		>
			<img
				loading="lazy"
				className="image"
				alt={title}
				src={`https://robohash.org/${id}?set=set3&size=200x200`}
			/>
			<h2>{title}</h2>

			{children}
			{otherProps.userEmail ? <p>Email: {otherProps.userEmail} </p> : ''}
			<p>Posted at: {moment(otherProps.postedAt).format('MMM Do YY')}</p>
			<p>Company: {otherProps.company.name}</p>
			{otherProps.countries.map((item: any) => (
				<p key={item.id}>Country: {item.name}</p>
			))}
		</div>
	);
}

export function CardDeail(props: any) {
	const { name, company, ...otherProps } = props;
	return (
		<Card {...otherProps} className="card-detail">
			<img src={close} alt="Close" className="close" />
			<p>{name}</p>
			<h3>
				{company.name} / {company.id}
			</h3>
		</Card>
	);
}
