import './AllParksCard.css'

function AllParksCard({key, id, name, img }) {
  return (
    <div className="parks-card" >
      <h2>{ name }</h2>
      <img className="park-img" src={img} />
    </div>
  )
}

export default AllParksCard