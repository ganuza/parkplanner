import Search from '../Search/Search'
import { Link, useLocation } from 'react-router-dom'
import npsLogo from '../../Assets/Arrowhead_3.png'
import './Header.css'

function Header({setSearchTerm}) {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (isHomePage) {
      setSearchTerm("");
    }
  }, [isHomePage, setSearchTerm])

  return (
    <header>
      <div className='title-cont'>
        <Link to={'/'}>
            <h1>ParkPlanner</h1>
        </Link>
        <img className="nps-icon" src={npsLogo}
        alt="National Park Service Icon"
        />
      {isHomePage && <Search setSearchTerm={setSearchTerm} />}
      </div>
    </header>
  )
}

export default Header