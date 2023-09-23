import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './AllParksCard.css'

function AllParksCard({id, name, img }) {
  return (
    <Link to={`/park/${id}`}>

      <div className="parks-card" >
        <img className="park-img" src={img} />
        <h2 className="img-title">{ name }</h2>
      </div>
    </Link>
  )
}

export default AllParksCard

AllParksCard.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}