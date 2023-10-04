import PropTypes from 'prop-types'

const FilterByState = ({selectedState, setSelectedState}) => {

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  const handleChange = (event) => {
    setSelectedState(event.target.value)
  }

  return (
    <div>
      <label htmlFor="stateDropdown" className="filter-input"></label>
      <select 
        id="stateDropdown"
        value={selectedState}
        onChange={handleChange}
      >
        <option value="">Choose a State</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterByState

FilterByState.propTypes = {
  selectedState: PropTypes.string,
  setSelectedState: PropTypes.func.isRequired
}