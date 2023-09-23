import { useParams } from 'react-router-dom'
import SelectedParkCard from '../SelectedParkCard/SelectedParkCard'
import PropTypes from 'prop-types'
import './SelectedPark.css'

const SelectedPark = ({allParksData}) => {
  console.log('SelectedPark data: ', allParksData)
  const { parkId } = useParams()

  const selectedParkDetails = allParksData.find((park) => {
      return park.id === parkId
    })
  
    console.log('selectedParkDetails: ', selectedParkDetails)
  
  const activities = []
  const parkActivities = selectedParkDetails.activities.map((activity) => {
    return activities.push(activity.name)
  })
  console.log('activities: ', activities)
  
  const image = selectedParkDetails.images[1]?.url
  
  console.log('image: ', image)
  
  const isImageAvailable = Boolean(image)


  const parkDescription = selectedParkDetails.description
  const activitiesList = activities.map((activity, index) => {
    return <li key={index}>{activity}</li>
  })
  const parkDirections = selectedParkDetails.directionsInfo
  return (
    <div>
      <SelectedParkCard className="sel-park-card-cont"
        
        image={image}
        parkDescription={parkDescription}
        activitiesList={activitiesList}
        parkDirections={parkDirections}
      />
      

    </div>
  )
}

export default SelectedPark

SelectedPark.propTypes = {
  allParksData: PropTypes.array.isRequired
}