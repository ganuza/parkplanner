import PropTypes from "prop-types"
import AllParksCard from "../AllParksCard/AllParksCard"
import './AllParks.css'

function AllParks({ allParksData, searchTerm }) {
  console.log('allParksData: ', allParksData)
  
  const filteredParks = allParksData.filter((park) => {
    return park.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  })
  
  const allParksCards = filteredParks.map((park) => {
    return (
      <AllParksCard
        key={park.id}
        id={park.id}
        code={park.parkCode}
        img={park.images[0].url}
        name={park.fullName}
        />
    )
  })

  const noResults = searchTerm.length > 0 && allParksCards.length === 0

  return (
    <div>
      {noResults ? (
        <p className="search-feedback">No matching parks were found.  Try another search!</p>
      ) : (
        <section className="all-parks-cont">
        {allParksCards}
        </section>
      )}
    </div>
  )
}

export default AllParks

AllParks.propTypes = {
  allParksData: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
}