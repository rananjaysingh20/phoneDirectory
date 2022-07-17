import React from 'react';

const Card = ({name, email, id, phone}) => {
	return (
		<div className='tc bg-near-black dib br3 pa1 ma2 grow bw3 shadow-5'>
			<img src={require('./img/Loading.png')} width="200px" alt='photo'/>
			<div>
				<h2>{name}</h2>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;