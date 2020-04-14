import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
	/*if (true) {
		throw new Error('Noooooo!')
	}*/
	return(
		<div>
			{robots.map((robot, i) => {
				return (
					<Card 
						name={robot.name} 
						email={robot.email} 
						id={robot.id} 
						key={robot.id} 
					/>
				)
			})}
		</div>
	)
}

export default CardList