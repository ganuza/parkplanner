import Header from '../Header/Header'
import AllParks from '../AllParks/AllParks'
import { getAllParksInfo } from '../../apiCalls'
import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [allParksData, setAllParksData] = useState([])
  const [serverError, setServerError] = useState({hasError: false, massage: ''})
  
  useEffect(() => {

    const cleanData = (data) => data.data.filter((park) => {
      return park.designation === 'National Park'
    })
    
    getAllParksInfo()
    .then((data) => {

      console.log('App data: ', data)
    
      setAllParksData(cleanData(data))
      })
      .catch((error) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  },[])
  
  return(
    <main className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<AllParks allParksData={allParksData} />}></Route>
      </Routes>
    </main>
  )
}

export default App