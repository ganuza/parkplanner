import { NavLink } from 'react-router-dom'
import npsLogo from '../../Assets/Arrowhead_3.png'
import { PropTypes } from 'prop-types'
import './Error.css'

const ErrorComponent = ({message, resetError}) => {
  const handleReset = () => {
    resetError()
  }

  return (
    <div className='error-message'>
      <img className='error-nps-icon' src={npsLogo} alt='National Park Service Icon' />
      <h2>Woops, We couldn't find that!</h2>
      <h2>
        {!message ?
          "The page you're looking for doesn't exist."
          : typeof message === 'string'
          ? message
          : message.message}
      </h2>
      <NavLink to='/' className='nav'>
        <div onClick={handleReset}>
          <button className='link-home-btn'>ParkPlanner Home</button>
        </div>
      </NavLink>
    </div>
  )
}

export default ErrorComponent

ErrorComponent.propTypes = {
  message: PropTypes.object.isRequired,
  resetErrror: PropTypes.func
}