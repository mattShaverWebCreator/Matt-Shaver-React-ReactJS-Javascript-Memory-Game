import React, { useState } from 'react'
import StartScreen from '../../startScreen'

import './styles.css'

export default function gameOver(props) {
  const [onePlayerName] = useState(props.onePlayerName)
  const [playerOneScore] = useState(props.playerOneScore)
  const [winner] = useState(props.onePlayerName)
  const [backToStartScreen, setBackToStartScreen] = useState(false)

  const goBackToStart = () => {
      setBackToStartScreen(true)
  }

  if(backToStartScreen === true) {
    return <StartScreen />
  }


        return <div className="gameOver-Container container">
         <h1 className="header">Game Over!</h1>
         <span className="winner-text span">{winner} has won the game!</span>
         <h3 className="question h3">Would you like to go back to the start screen?</h3>
         <button onClick={goBackToStart} className="startMenu-Button button">Back To Start</button>
         <span className="generalSpan span">Built with ☕💖 by <a href="http://websitedesignnorthcarolina.com">Matt Shaver</a></span>
        </div>






 }
