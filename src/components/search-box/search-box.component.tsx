import React from 'react';
import './search-box.styles.scss';

type Props = {
	onChange?: any,
};

const SearchBox: React.FC<Props> = (props: any) => {
	const handleInputChange = (e: any):void => {
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
};
export default SearchBox;
