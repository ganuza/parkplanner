import Search from '../Search/Search'
import './Header.css'

function Header() {
  return (
    <div className='title-cont'>
      <h1>ParkPlanner</h1>
      <Search />
    </div>
  )
}

export default Header