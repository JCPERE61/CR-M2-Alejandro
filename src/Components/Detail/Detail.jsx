import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const { name } = useParams();

  let char = useSelector(state => state.characters).find(char => char.name === name);

  if (char) {
    return (
      <div>
        <h1>{char.name}</h1>
        <img src={char.image}/>
        <h2>{char.house}</h2>
        <h2>{char.actor}</h2>
      </div>
    )
  }

}

export default Detail;