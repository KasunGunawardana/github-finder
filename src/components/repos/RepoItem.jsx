import React from 'react'
import PropTypes from 'prop-types'

const repoItemStyles = {
	fontSize: '0.9rem',
	marginBottom: '5px'
}

const RepoItem = ({ repo }) => {
	const { html_url } = repo;
  return (
	<li style={repoItemStyles}><a href={html_url} target="_blank">{html_url}</a></li>
  )
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
}

export default RepoItem