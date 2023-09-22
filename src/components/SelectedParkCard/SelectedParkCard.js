import './SelectedParkCard.css'

const SelectedParkCard = ({image, parkDescription, activitiesList, parkDirections}) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none'; // Hide the broken image
  }

  return (
    

    <div className="sel-park-card">
        {image ? (
        <img
          className="sel-park-img"
          src={image}
          alt="Park"
          onError={handleImageError}
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
          <h3 className="details-title">Activities</h3>
          <ul className="activity-list">{activitiesList}</ul>
        </div>
        <div className="details-cont">
          <h3 className="details-title">Directions</h3>
          <p>{parkDirections}</p>
        </div>
      </section>
    </div>
    
  )
}

export default SelectedParkCard