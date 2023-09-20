import PropTypes from "prop-types"
import './AllParks.css'

function AllParks( { allParksData }) {
  const allParksCards = allParksData.map((park) => {
    return (
      <AllParksCard
        key={park.id}
        id={park.id}
        img={park.image[0]}
        // renderIndividualPark={renderIndividualPark}
        />
    )
  })
  return (
    <section className="all-parks-cont">
      <h2>Card</h2>
      <h2>Card</h2>
      <h2>Card</h2>
      <h2>Card</h2>
    </section>
  )
}

export default AllParks