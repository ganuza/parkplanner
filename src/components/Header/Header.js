import FilterByState from '../FilterByState/FilterByState'
import Search from '../Search/Search'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import npsLogo from '../../Assets/Arrowhead_3.png'
import PropTypes from 'prop-types'
import './Header.css'

function Header({ setSearchTerm, selectedState, setSelectedState }) {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  const clearSearchAndState = () => {
    setSearchTerm('');
    setSelectedState('');
  };

  useEffect(() => {
    if (isHomePage) {
      setSearchTerm('');
      setSelectedState('');
    }
  }, [isHomePage]);

  return (
    <header>
      <div className='title-cont'>
        <Link className="homepage-link" to={'/'} onClick={clearSearchAndState}>
          <h1>ParkPlanner</h1>
        </Link>
        <img
          className="nps-icon"
          src={npsLogo}
          alt="National Park Service Icon"
        />
      </div>
      {isHomePage && <FilterByState selectedState={selectedState} setSelectedState={setSelectedState} />}
      {isHomePage && <Search setSearchTerm={setSearchTerm} />}
    </header>
  );
}

export default Header

Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  setSelectedState: PropTypes.func.isRequired,
  selectedState: PropTypes.string.isRequired
}