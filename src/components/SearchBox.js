import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa2 ba b--gray bg-silver'
				type='search' 
				placeholder='Search Name'
				onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox;