import React from  'react'

const Card = ({id, name, email}) => {
	return(
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt = 'robots' src={`https://robohash.org/${id}?200x200`} />
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	)
}

export default Card