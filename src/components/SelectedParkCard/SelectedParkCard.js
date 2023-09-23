import PropTypes from 'prop-types'
import './SelectedParkCard.css'

const SelectedParkCard = ({image, parkDescription, activitiesList, parkDirections, parkEmail, parkPhone}) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <div className="sel-park-card">
        {image ? (
        <img
          className="sel-park-img"
          src={image}
          alt={image ? "Park" : "Image not available"}
          onError={handleImageError}
          aria-hidden={!image}
        />
      ) : (
        <div>
          <p className="image-not-available"
            style={{display: 'block', color: 'red' }}
            >Image not available
          </p>
        </div>
      )}
        <article className="description-cont">{parkDescription}</article>
      <section className="details-section">
        <div className="details-cont">
          <h3 className="details-title">Plan Your Activities</h3>
          <ul className="activity-list">{activitiesList}</ul>
        </div>
        <div className="details-cont">
          <h3 className="details-title">Plan Your Trip</h3>
          <p><strong>Directions:</strong><br></br> {parkDirections}</p>
          <p><strong>Email Address:</strong> {parkEmail}</p>
          <p><strong>Phone Number:</strong> {parkPhone}</p>
        </div>
      </section>
    </div> 
  )
}

export default SelectedParkCard

SelectedParkCard.propTypes = {
  image: PropTypes.string.isRequired, 
  parkDescription: PropTypes.string.isRequired, 
  activitiesList: PropTypes.array.isRequired, 
  parkDirections: PropTypes.string.isRequired,
  parkEmail: PropTypes.string.isRequired,
  parkPhone: PropTypes.string.isRequired,
}