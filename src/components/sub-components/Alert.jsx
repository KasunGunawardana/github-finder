import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ alert, clearAlert }) => {
  return (
	  alert !== null && (
		  <div className={`alert alert-${alert.type}`} onClick={() => clearAlert()}>
			  <i className="fas fa-info-circle mr-1" /> { alert.msg }
		  </div>
	  )
  )
}

Alert.propTypes = {
	alert: PropTypes.object
}

export default Alert