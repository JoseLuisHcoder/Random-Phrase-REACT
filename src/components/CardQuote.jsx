import React from 'react'
import CardButton from './CardButton'


const CardQuote = ({randomQuote, randomColor, randomAll}) => {

    const backgroundColor = {
    backgroundColor:randomColor
  }

  return (
    <div className='card'>
        <div className="card__icon">
        <i className='bx bxs-quote-alt-left'></i>
        </div>
        <div className="card__content">
            <p className='card__quote'>"{randomQuote.quote}"</p>
            <p className='card__author'><em>{randomQuote.author}</em> </p>
            <div>
              <CardButton randomAll={randomAll} randomColor={randomColor} />
            </div>
            
        </div>
        

        
    </div>
  )
}

export default CardQuote