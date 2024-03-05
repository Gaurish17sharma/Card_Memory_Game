import React from 'react';
import './App.css';
import Board from './Components/Board';
import { shuffleArray } from './shuffle';
import Scoreboard from './Components/Scoreboard';
import { useState , useEffect }  from 'react';

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);

	function onCardClick(cardId) {
    if (clickedCardIds.includes(cardId)) {
      setCurrentScore(0);
      setClickedCardIds([]);
    } 
    else {
      setCurrentScore(currentScore + 1);
      
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }

      setClickedCardIds([...clickedCardIds, cardId]);
    }

    const shuffledArray = shuffleArray(cardsData);
    setCardsData(shuffledArray);
  }

  async function fetchData() {
    fetch(`https://api.api-onepiece.com/v2/fruits/en`)
      .then((response) => response.json())
      .then((data) => {
        const shuffledArray = shuffleArray(data);
        setCardsData(shuffledArray);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>One Piece Devil Fruit Card Memory Game</h1>
      <div className="App-body">
        <h3>Get as many points as possible by clicking on a card only once!</h3>
        <Scoreboard currentScore = {currentScore} bestScore = {bestScore} />
        <Board data={cardsData} onCardClick={onCardClick} />
      </div>
    </div>
  );
}

export default App;


















