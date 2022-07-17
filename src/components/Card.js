import React from 'react';

const Card = ({name, email, id, phone}) => {
	return (
		<div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
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