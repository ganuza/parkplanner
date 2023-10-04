import PropTypes from "prop-types"
import AllParksCard from "../AllParksCard/AllParksCard"
import './AllParks.css'

function AllParks({ allParksData, selectedState, searchTerm }) {
 
  let filteredParks = allParksData

  if (searchTerm) {
    filteredParks = filteredParks.filter((park) =>
      park.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  if (selectedState) {
    filteredParks = filteredParks.filter((park) =>
      park.states.toLowerCase().includes(selectedState.toLowerCase())
    )
  }

  const allParksCards = filteredParks.map((park) => {
    return (
      <AllParksCard
        key={park.id}
        id={park.id}
        code={park.parkCode}
        img={park.images[0].url}
        alt={park.images[0].altText}
        name={park.fullName}
      />
    )
  })

  return (
    <div>
      {allParksCards.length === 0 ? (
        <p className="search-feedback">
          No matching parks were found. Try another search or clear the search field to see all parks!
        </p>
      ) : (
        <section className="all-parks-cont">{allParksCards}</section>
      )}
    </div>
  )
}

export default AllParks

AllParks.propTypes = {
  searchTerm: PropTypes.string,
  selectedState: PropTypes.string,
  allParksData: PropTypes.arrayOf(PropTypes.shape({
    activities: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    })),
    addresses: PropTypes.arrayOf(PropTypes.shape({
      city: PropTypes.string,
      countryCode: PropTypes.string,
      line1: PropTypes.string,
      line2: PropTypes.string,
      line3: PropTypes.string,
      postalCode: PropTypes.string,
      provinceTerritoryCode: PropTypes.string,
      stateCode: PropTypes.string,
      type: PropTypes.string,
    })),
    contacts: PropTypes.objectOf(PropTypes.array),
    description: PropTypes.string,
    designation: PropTypes.string,
    directionsInfo: PropTypes.string,
    directionsUrl: PropTypes.string,
    entranceFees: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    entrancePasses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    fees: PropTypes.array,
    fullName: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    latLong: PropTypes.string,
    latitude: PropTypes.string,
    longitude: PropTypes.string,
    name: PropTypes.string,
    operatingHours: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]))),
    parkCode: PropTypes.string,
    states: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    url: PropTypes.string,
    weatherInfo: PropTypes.string,
  })).isRequired,
}