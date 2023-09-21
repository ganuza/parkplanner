// import PropTypes from "prop-types"
import AllParksCard from "../AllParksCard/AllParksCard"
import './AllParks.css'

function AllParks({ allParksData }) {
  console.log('allParksData: ', allParksData)
  const allParksCards = allParksData.map((park) => {
    return (
      <AllParksCard
        key={park.id}
        id={park.id}
        img={park.images[0].url}
        name={park.fullName}
        // renderIndividualPark={renderIndividualPark}
        />
    )
  })
  return (
    <section className="all-parks-cont">
      {allParksCards}
    </section>
  )
}

export default AllParks