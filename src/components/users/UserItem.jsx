import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ 
	avatar,
	url,
	name
}) => {
	return (
		<div className="card text-center">
			<img src={avatar} alt={name} className="round-img" style={{ width: '60px' }} />
			<h3>{name}</h3>
			<div className="my-1">
				<Link to={`users/${name}`} className="btn btn-dark btn-sm">More</Link>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	avatar: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

export default UserItem;
