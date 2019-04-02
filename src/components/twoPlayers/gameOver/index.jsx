import React, { useState } from 'react'
import StartScreen from '../../startScreen'
import Card from '../../card'
import initializeDeck from '../../../deck'
import PlayerInfoForm from '../../onePlayer/playerInfoForm'
import Board from '../board'
import './styles.css'

export default function gameOver(props) {
  const [onePlayerName] = useState(props.onePlayerName)
  const [twoPlayerName] = useState(props.twoPlayerName)
  const [playerOneScore] = useState(props.playerOneScore)
  const [playerTwoScore] = useState(props.playerTwoScore)
  const [winner, setWinner] = useState(props.onePlayerName)
  const [backToStartScreen, setBackToStartScreen] = useState(false)



      const goBackToStart = () => {
          setBackToStartScreen(true)
      }

      if(backToStartScreen === true) {
        return <StartScreen />
      }

      if(playerTwoScore > playerOneScore) {
      setWinner(twoPlayerName)

      return <div className="gameOver-Container">
       <h1 className="header">Game Over!</h1>
       <span className="winner-text span">{winner} has won the game!</span>
       <h3 className="question h3">Would you like to go back to the start screen?</h3>
       <button onClick={goBackToStart} className="startMenu-Button button">Back To Start</button>
       <span className="generalSpan span">Built with ☕💖 by <a href="http://websitedesignnorthcarolina.com">Matt Shaver</a></span>
      </div>
    }

    if(playerTwoScore === playerOneScore) {
      console.log("The score was" + playerOneScore)
      return <div className="gameOver-Container">
       <h1 className="header">Game Over!</h1>
       <span className="winner-text span">It's a tie!</span>
       <h3 className="question h3">Would you like to go back to the start screen?</h3>
       <button onClick={goBackToStart} className="startMenu-Button button">Back To Start</button>
       <span className="generalSpan span">Built with ☕💖 by <a href="http://websitedesignnorthcarolina.com">Matt Shaver</a></span>
      </div>
    }

        return <div className="gameOver-Container">
         <h1 className="header">Game Over!</h1>
         <span className="winner-text span">{winner} has won the game!</span>
         <h3 className="question h3">Would you like to go back to the start screen?</h3>
         <button onClick={goBackToStart} className="startMenu-Button button">Back To Start</button>
         <span className="generalSpan span">Built with ☕💖 by <a href="http://websitedesignnorthcarolina.com">Matt Shaver</a></span>
        </div>






 }
