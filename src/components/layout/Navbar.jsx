import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({
	title,
	icon
}) => {

	return (
		<div className="bg-primary navbar-container">
			<div className="container">
				<div className="navbar">
					<Link to="/"><i className={icon + ' mr-1'}></i> {title}</Link>
					<ul>
						<li>
							<Link to="/">Home</Link>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

Navbar.defaultProps = {
	title: 'Github finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
}

export default Navbar;