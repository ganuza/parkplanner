import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import npsLogo from '../../Assets/Arrowhead_3.png'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='title-cont'>
        <Link to={'/'}>
            <h1>ParkPlanner</h1>
        </Link>
        <img className="nps-icon" src={npsLogo}
        alt="National Park Service Icon"
        />
        <Search />
      </div>
    </header>
  )
}

export default Header