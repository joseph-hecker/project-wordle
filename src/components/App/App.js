import Game from '../Game';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import Header from '../Header';
import React from 'react';

function App() {
  const [guesses, setGuesses] = React.useState([])

  const addGuess = guess => {
    setGuesses([...guesses, guess])
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game guesses={guesses}/>
        <GuessList guesses={guesses} />
        <GuessInput addGuess={addGuess}/>
      </div>
    </div>
  );
}

export default App;
