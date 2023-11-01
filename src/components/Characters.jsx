import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Characters = ({ characters = [] }) => {
  return (
    <div className='row'>
      {characters.map((e, index) => (
        <CSSTransition key={index} in={true} appear={true} timeout={500} classNames='slide'>
          <div className='col'>
            <div className='card'>
              <img src={e.image} alt='' />
              <div className='card-body'>
                <h5 className='card-title'>{e.name}</h5>
                <hr />
                <p>Status: {e.status}</p>
                <p>Species: {e.species}</p>
                <p>Location: {e.location.name}</p>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </div>
  );
};

export default Characters;

