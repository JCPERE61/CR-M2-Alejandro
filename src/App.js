import Cards from './Components/Cards/Cards';
import Form from './Components/Form/Form';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const URL = "https://hp-api.onrender.com/api/characters";

  const onSearch = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
      setCharacters([...characters, data]);
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Cards characters={characters} onSearch={onSearch}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='detail/:name' element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;
