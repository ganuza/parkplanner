import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSelectedPark } from '../../apiCalls'
import SelectedParkCard from '../SelectedParkCard/SelectedParkCard'
import ErrorComponent from '../Error/Error'
import './SelectedPark.css'

const SelectedPark = () => {
 
  const { parkCode } = useParams()
  const [selectedPark, setSelectedPark] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getSelectedPark(parkCode)
      .then((data) => {
        console.log('selectedParkData: ', data.data[0])
        setSelectedPark(data.data[0])
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message || 'An error occurred while fetching park data.')
        setLoading(false)
      })
  }, [parkCode])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!selectedPark || !selectedPark.activities) {
  return <ErrorComponent message={error} resetError={() => setError(null)} />
  // <div>Loading...</div>
  }

  if (error) {
    return <ErrorComponent message={error} resetError={() => setError(null)} />
  }

  const parkActivities = selectedPark.activities.map((activity) => {
    return activity.name;
  });
  const image = selectedPark.images[1]?.url
  const parkDescription = selectedPark.description
  const activitiesList = parkActivities.map((activity, index) => {
      return <li key={index}>{activity}</li>
    })
  const parkDirections = selectedPark.directionsInfo
  const parkEmail = selectedPark.contacts.emailAddresses[0].emailAddress
  const parkPhone = selectedPark.contacts.phoneNumbers[0].phoneNumber

  return (
    <div className="chosen-park">
      <SelectedParkCard className="sel-park-card-cont"
        image={image}
        parkDescription={parkDescription}
        activitiesList={activitiesList}
        parkDirections={parkDirections}
        parkEmail={parkEmail}
        parkPhone={parkPhone}
      />
    </div>
  )
}

export default SelectedPark