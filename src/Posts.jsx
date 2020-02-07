import React, { useState } from 'react';
import cars from './data';

const Posts = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <ul>
      {cars.map(({ name = '', models = '' }, index) => {
        const isOpen = openIndex === index;
        const textToShow = isOpen ? models : `${models[0]} ...`;
        return (
          <li key={Math.random()} style={{ border: isOpen ? '1px solid black' : 'none' }}>
            <div>{`name: ${name}`}</div>
            <div>{`models: ${textToShow}`}</div>
            {!isOpen && (
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
            >
                Show this
            </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
