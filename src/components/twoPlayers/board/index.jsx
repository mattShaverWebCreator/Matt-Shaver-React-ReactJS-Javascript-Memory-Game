import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from '../../card'
import initializeDeck from '../../../deck'
import PlayerInfoForm from '../../onePlayer/playerInfoForm'
import GameOver from '../gameOver'
import './styles.css'

export default function Board(props) {
    const [cards, setCards] = useState([])
    const [onePlayerScore, setScore] = useState(0)
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [onePlayerName] = useState(props.onePlayerName)
    const [twoPlayerName] = useState(props.twoPlayerName)
    const [turn, setTurn] = useState(0)
    const [numberOfMatches, setNumberOfMatches] = useState(0)
    const [isGameOver, setGameOver] = useState(false)
    const [winner, setWinner] = useState(props.onePlayerName)



      useEffect(() => {
        resizeBoard()
        setCards(initializeDeck())
    }, [])


      useEffect(() => {
        preloadImages()
      }, cards)

      useEffect(() => {
        const resizeListener = window.addEventListener('resize', resizeBoard)

        return () => window.removeEventListener('resize', resizeListener)
      })


   const changeTurnOne = () => {
         setTurn(turn + 1)
   }
   const changeTurnTwo = () => {
         setTurn(turn - 1)
   }


     if (isGameOver == true) {
       return <GameOver onePlayerName={onePlayerName} twoPlayerName={twoPlayerName} playerOneScore={playerOneScore} playerTwoScore={playerTwoScore} />
     }



  const gameOver = (useState) => {
    if (numberOfMatches == 5) {
      setGameOver(true)
    }
  }


   const add = () => {
      switch (turn) {
        case 0:
         setPlayerOneScore(playerOneScore + 1)
         setNumberOfMatches(numberOfMatches + 1)
         changeTurnOne()
         resetCards()
         gameOver()
         break;
        case 1:
         setPlayerTwoScore(playerTwoScore + 1)
         setNumberOfMatches(numberOfMatches + 1)
         changeTurnTwo()
         resetCards()
         gameOver()
         break;
      }
  }

            const handleClick = (id) =>  {
              setDisabled(true)
              if(flipped.length === 0) {
                setFlipped([id])
                setDisabled(false)
              } else {
                if(sameCardClicked(id))
                  return
                  setFlipped([flipped[0], id])
                if (isMatch(id)) {
                  setSolved([...solved, flipped[0], id])
                  add()
                  setDisabled(false)
                } else {
                  setTimeout(resetCards, 1300)
                }
              }

          }

    const preloadImages = () => {
      cards.map(card => {
        const src = `/img/${card.type}.png`
        new Image().src = src
      })
    }



      const resetCards = () => {
        setFlipped([])
        setDisabled(false)
      }

       const sameCardClicked = (id) => flipped.includes(id)

       const isMatch = (id) => {
         const clickedCard = cards.find((card) => card.id === id)
         const flippedCard = cards.find((card) => flipped[0] === card.id)
         return flippedCard.type === clickedCard.type
       }

      const resizeBoard = () => {
        setDimension(
          Math.min(
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
          ),
       )
      }

           return <div className="board">
                  <div className="onePlayerName">Red Player Name: {onePlayerName}</div>
                  <div className="playerOneScore">Red Player Score: {playerOneScore}</div>
                  <div className="twoPlayerName">Blue Player Name: {twoPlayerName}</div>
                  <div className="playerTwoScore">Blue Player Score: {playerTwoScore}</div>
                    {cards.map((card) => (
                       <Card
                         key={card.id}
                         id={card.id}
                         type={card.type}
                         width={dimension / 3.5}
                         height={dimension / 3.5}
                         flipped={flipped.includes(card.id)}
                         solved={solved.includes(card.id)}
                         handleClick={handleClick}
                         disabled={disabled || solved.includes(card.id)}
                       />
                    ))}
                 </div>



 }

 Board.propTypes = {
   disabled: PropTypes.bool.isRequired,
   dimension: PropTypes.number.isRequired,
   cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
   flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
   solved: PropTypes.arrayOf(PropTypes.number).isRequired,
   handleClick: PropTypes.func.isRequired
 }
