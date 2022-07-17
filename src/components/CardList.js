import React from 'react';
import Card from './Card.js'


const CardList = ( { people } ) => {
	return (
		<div>
		{
			people.map((user,i) => {
				return (
					<Card 
						key={i}
						id={people[i].id}
						name={people[i].name} 
						phone={people[i].phone} 
						email={people[i].email}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;