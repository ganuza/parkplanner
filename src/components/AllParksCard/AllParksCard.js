import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './AllParksCard.css'

function AllParksCard({ code, name, img, alt }) {
  return (
    <Link to={`/park/${code}`}>

      <div className="parks-card" >
        <img className="park-img" src={img} alt={alt}/>
        <h2 className="img-title">{ name }</h2>
      </div>
    </Link>
  )
}

export default AllParksCard

AllParksCard.propTypes = {
  code: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string
}