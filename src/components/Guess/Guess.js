import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess=undefined, answer }) {
  const check = checkGuess(guess, answer)

  const formatClasses = (...classNames) => {
    if (classNames.length < 1)
    {
      return ''
    }

    let classes = `${classNames[0]}`
    classNames.slice(1).forEach(name => name ? classes += ` ${name}` : '')
    return classes
  }

  return (
    <p className='guess'>
      {range(5).map(i => {
        const c = guess && guess.length > i ? guess[i] : undefined
        const classes = formatClasses('cell', check ? check[i].status : undefined)
        return <span key={i} className={classes}>{c}</span>
      })}
    </p>
  );
}

export default Guess;
