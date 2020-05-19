import React from 'react';
import './search-box.styles.scss';

export default function SearchBox(props: any): JSX.Element {
	const handleInputChange = (e: any) => {
		const val = e.target.value;
		props.onChange && props.onChange(val);
	};
	return (
		<input
			className="search-box"
			type="search"
			placeholder="Search Job"
			onChange={(e) => handleInputChange(e)}
		/>
	);
}
