import React from 'react'
import spinner from '../../assets/spinner.gif';

const Spinner = () => <div className="text-center">
      <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </div>

export default Spinner