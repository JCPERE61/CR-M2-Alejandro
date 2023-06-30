import { Link } from "react-router-dom";

const Card = ({ name, image, house }) => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img height="200px" width="150px" src={image} alt={name} />
      <Link to={`/detail/${name}`}><h2>{name}</h2></Link>
      <h3>{house}</h3>
    </div>
  )
}

export default Card;