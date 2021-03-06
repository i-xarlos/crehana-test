import React from 'react';
import './select-box.styles.scss';
type Props = {
	name?: string,
	onChange?: any,
	data?: any,
};

const SelectBox: React.FC<Props> = ({ name, data, onChange }) => {
	const handleSelectChange = (e: any): void => {
		const val: string = e.target.value;
		onChange && onChange(val, name);
	};

	const listCountries = (): JSX.Element => {
		return (
			data &&
			data.map((country: any) => (
				<option key={country.id} value={country.id}>
					{country.name}
				</option>
			))
		);
	};
	return (
		<select
			className="select-box"
			data-testid="select-box"
			onChange={(e) => handleSelectChange(e)}
		>
			<option value="">{name === 'dates' ? 'Sort by':'All'} {name} ▼</option>
			{listCountries()}
		</select>
	);
};
export default SelectBox;
