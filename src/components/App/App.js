import Header from '../Header/Header'
import AllParks from '../AllParks/AllParks'
import SelectedPark from '../SelectedPark/SelectedPark'
import ErrorComponent from '../Error/Error'
import { getAllParksInfo } from '../../apiCalls'
import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [allParksData, setAllParksData] = useState([])
  const [selectedState, setSelectedState] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [serverError, setServerError] = useState({hasError: false, message: ''})
  
  useEffect(() => {

    const cleanData = (data) => data.data.filter((park) => {
      return park.designation === 'National Park'
    })
    
    getAllParksInfo()
    .then((data) => {
      setAllParksData(cleanData(data))
      })
      .catch((error) => {
        setServerError({hasError: true, message: `${error.message}`})
      })
  },[])

  const resetError = () => {
    setServerError({hasError: false, message: ''})
  }

  return(
    <main className='App'>
      <Header setSearchTerm={setSearchTerm} selectedState={selectedState} setSelectedState={setSelectedState}/>
      {serverError.hasError ? (
        <ErrorComponent
          message={serverError.message}
          resetError={resetError}
        />
      ) : (

      <Routes>
        <Route path="/" element={<AllParks allParksData={allParksData} selectedState={selectedState} searchTerm={searchTerm} />}></Route>
        <Route path="/park/:parkCode" element={<SelectedPark allParksData={allParksData} />}></Route>
        <Route path="*" element={<ErrorComponent message={{message: "The page you're looking for doesn't exist."}} resetError={resetError} />} />
      </Routes>
      )}
    </main>
  )
}

export default App