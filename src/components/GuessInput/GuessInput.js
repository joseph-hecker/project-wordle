import React from 'react';

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState('')

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={e => {
        e.preventDefault()
        console.log(guess)
        addGuess(guess)
        setGuess('')
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        required={true}
        value={guess}
        onChange={e => {
          e.preventDefault()
          setGuess(e.target.value.toUpperCase())
        }} />
    </form>
  );
}

export default GuessInput;
