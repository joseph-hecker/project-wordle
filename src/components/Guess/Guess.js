import React from 'react';
import { range } from '../../utils';

function Guess({ guess=undefined }) {
  return (
    <p className='guess'>
      {range(5).map(i => {
        const c = guess && guess.length > i ? guess[i] : undefined
        return <span key={i} className='cell'>{c}</span>
      })}
    </p>
  );
}

export default Guess;
