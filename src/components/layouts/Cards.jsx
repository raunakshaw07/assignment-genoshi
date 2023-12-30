import React from 'react';

const Card = ({ children, extras, bgImage }) => {
  return (
    <div className={`rounded overflow-hidden shadow-lg ${extras}`}>
      { children }
    </div>
  );
};

export default Card;