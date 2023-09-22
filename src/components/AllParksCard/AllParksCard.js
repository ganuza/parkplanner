import './AllParksCard.css'

function AllParksCard({key, id, name, img }) {
  return (
    <div className="parks-card" >
      <img className="park-img" src={img} />
      <h2 className="img-title">{ name }</h2>
    </div>
  )
}

export default AllParksCard