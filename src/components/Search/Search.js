import PropTypes from 'prop-types'

const Search = ({ setSearchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <form className="search-field" onSubmit={handleSubmit}>
      <input
        type='search'
        id='searchInput'
        name='q'
        placeholder='Search for National Parks' className="search-field"
        onChange={handleInputChange}></input>
    </form>
  )
}

export default Search

Search.propTypes = {
  searchTerm:PropTypes.string
}