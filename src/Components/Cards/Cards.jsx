import { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from 'react-redux';
import { getChars } from "../../redux/actions";

const Cards = ({ onSearch }) => {

  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters).slice(0,20);

  console.log('characters:', characters);

  useEffect(() => {
    if (!characters.length) {
      dispatch(getChars());
    }
  },[]);

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {characters?.map((char, index) => {
        return (
        <Card 
          key={index}
          name={char.name}
          house={char.house}
          image={char.image}
        />
        )
      })}
    </div>
  )
}

export default Cards;