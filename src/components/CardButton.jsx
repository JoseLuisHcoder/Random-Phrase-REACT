import React from 'react'

const CardButton = ({randomAll, randomColor}) => {

    const backgroundColor = {
        backgroundColor:randomColor
      }
  return (
    <div className='card__btn'>
         <button onClick={randomAll} style={backgroundColor} className='btn'>&gt;</button>
         
    </div>
  )
}

export default CardButton