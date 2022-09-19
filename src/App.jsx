import { useState } from 'react'

import './App.css'
import quote from './data/data.json'
import CardQuote from './components/CardQuote'
import colors from './utilities/colors'
import CardButton from './components/CardButton'




function App() {
  const getIndexRandom = arr =>Math.floor(Math.random() * arr.length)
  
    const firstQuote = quote[getIndexRandom(quote)]
    const firstColor = colors[getIndexRandom(colors)]

    const [randomQuote, setRandomQuote] = useState(firstQuote)
    const [randomColor, setRandomColor] = useState(firstColor)

    const backgroundColor = {
      backgroundColor:randomColor
    }

    const randomAll = ()=>{
      setRandomQuote(quote[getIndexRandom(quote)])
      setRandomColor(colors[getIndexRandom(colors)])
    }
 
        
  return (
    <div className="App" style={backgroundColor} >
      <div className="container" style={{color:randomColor}}>
        <CardQuote randomAll={randomAll} randomQuote={randomQuote} randomColor={randomColor} />
       
      </div>
      
    </div>
  )
}

export default App
