import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imageUrl, name} = destinationDetails

  return (
    <li className="card-list-container">
      <img src={imageUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
