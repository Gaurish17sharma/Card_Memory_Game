import React from 'react';
import './App.css';
import Board from './Components/Board';
import { useState, useEffect } from 'react';

function App() {
  const [cardsData, setCardsData] = useState([]);

  async function fetchData() {
    fetch(`https://rickandmortyapi.com/api/character?page`)
      .then((response) => response.json())
      .then((data) => {
        setCardsData(data.results);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <Board data={cardsData} />
      </div>
    </div>
  );
}

export default App;
