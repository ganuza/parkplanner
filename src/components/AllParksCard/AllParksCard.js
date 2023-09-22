import { Link } from 'react-router-dom'
import './AllParksCard.css'

function AllParksCard({key, id, name, img }) {
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