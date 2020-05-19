import React from 'react';
import './select-box.styles.scss';

export default function SelectBox(props: any): JSX.Element {
	const handleSelectChange = (e: any) => {
		const val = e.target.value;
		console.log(val);
		props.onChange && props.onChange(val);
	};
	return (
		<select className="select-box" onChange={(e) => handleSelectChange(e)}>
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
			<option value="mercedes">Mercedes</option>
			<option value="audi">Audi</option>
		</select>
	);
}
