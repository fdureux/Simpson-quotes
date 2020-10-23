import React from 'react';
import './QuoteCard.css';

function QuoteCard({ character }) {
  return (
    <div className="QuoteCard">
      <img src={character.image} alt={character.character} />
      <figcaption>
        <blockquote>{character.quote} </blockquote>
        <p>
        <cite>{character.character}</cite>
        </p>       
      </figcaption>
    </div>
  );
  }
  
export default QuoteCard;
