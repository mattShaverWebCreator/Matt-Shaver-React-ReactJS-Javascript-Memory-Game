import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from '../../card'
import GameOver from '../gameOver'
import initializeDeck from '../../../deck'

export default function Board(props) {
    const [cards, setCards] = useState([])
    const [onePlayerScore, setScore] = useState(0)
    const [playerOneScore] = useState(0)
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [numberOfMatches, setNumberOfMatches] = useState(1)
    const [isGameOver, setGameOver] = useState(false)
    const [playerName] = useState(props.playerName)




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

      const gameOver = () => {
        if (numberOfMatches === 5) {
          setGameOver(true)
        }
      }

      const add = () => {
         setScore(onePlayerScore + 1);
         setNumberOfMatches(numberOfMatches + 1);
         gameOver()
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
            resetCards()
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

      if (isGameOver === true) {
        return <GameOver onePlayerName={playerName} playerOneScore={playerOneScore} />
      }

         return <div className="board container">
            <div className="onePlayerName"><span className="generalSpan span">Your Name: {playerName}</span></div>
            <div className="onePlayerScore"><span className="generalSpan span">Your Score: {onePlayerScore}</span></div>
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
