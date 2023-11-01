import React from 'react'

function Pagination({prevp, nextp, onPrevious, onNext}) {

    const previous = () => {
        onPrevious();
    }

    const next = () => {
        onNext();
    }
  return (
    <nav className='nav2'>
      <ul className='pagination'> 
      {prevp ? (
       <li className='page-item'>
            <button className='page-link' onClick={previous}>Previous</button>
        </li>
        ): null}
       
       {nextp ? (
       <li className='page-item'>
            <button className='page-link' onClick={next}>Next</button>
        </li>
       ): null}
        
      </ul>
    </nav>
  )
}

export default Pagination
