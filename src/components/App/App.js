import Header from '../Header/Header'
import AllParks from '../AllParksCont/AllParks'
import { getAllParksInfo } from '../../apiCalls'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [allParksData, setAllParksData] = useState([])
  const [serverError, setServerError] = useState({hasError: false, massage: ''})

  useEffect(() => {
    const cleanData = (data) => data.data.filter((park) => {
      return park.designation === 'National Park'
    })
    getAllParksInfo()
      .then((data) => {
        console.log(cleanData(data))
        setAllParksData(cleanData(data))
      })
      .catch((error) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  }, [])

  return(
    <main className='App'>
      <Header />
      <AllParks />
      <h2>Main</h2>
    </main>
  )
}

export default App