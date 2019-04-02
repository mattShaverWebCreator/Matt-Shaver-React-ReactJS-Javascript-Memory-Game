import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import onePlayer from '../onePlayer'
import Card from '../card'
import initializeDeck from '../../deck'
import PlayerInfoForm from '../onePlayer/playerInfoForm'

export default function Board(props) {
    const [cards, setCards] = useState([])
    const [onePlayerScore, setScore] = useState(0)
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [flipped, setFlipped] = useState([])
    const [dimension, setDimension] = useState(400)
    const [solved, setSolved] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [playerName] = useState(props.playerName)
    const [onePlayerName] = useState(props.onePlayerName)
    const [twoPlayerName] = useState(props.twoPlayerName)
    const [playerMode] = useState(props.playerMode)




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

      let add = () => {
         setScore(onePlayerScore + 1);
      }

        if(playerMode == 1) {

             add = () => {
               setScore(onePlayerScore + 1);
            }

        }

        if(playerMode == 2) {
          let add = () => {
              let turn = 0;
              if(turn % 2 == 0) {
                setPlayerOneScore(playerOneScore + 1)
                turn = turn + 1
              }
              else {
                setPlayerTwoScore(playerTwoScore + 1)
                turn = turn + 1
              }
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
          if (isMatch(id, playerMode)) {
            setSolved([...solved, flipped[0], id])
            add()
            resetCards()
          } else {
            setTimeout(resetCards, 2000)
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

       if(props.playerMode == 1) {
         return <div className="board">
            <div className="onePlayerName">Your Name: {playerName}</div>
            <div className="onePlayerScore">Your Score: {onePlayerScore}</div>
              {cards.map((card) => (
                     <Card
                       key={card.id}
                       id={card.id}
                       type={card.type}
                       width={dimension / 4.5}
                       height={dimension / 4.5}
                       flipped={flipped.includes(card.id)}
                       solved={solved.includes(card.id)}
                       handleClick={handleClick}
                       disabled={disabled || solved.includes(card.id)}
                     />
               ))}
        </div>
      }
      console.log("2p" + twoPlayerName)
      if(props.playerMode == 2) {
        return <div className="board">
              <div className="onePlayerName">Your Name: {onePlayerName}</div>
              <div className="playerOneScore">Your Score: {playerOneScore}</div>
              <div className="twoPlayerName">Your Name: {twoPlayerName}</div>
              <div className="playerTwoScore">Your Score: {playerTwoScore}</div>
                {cards.map((card) => (
                   <Card
                     key={card.id}
                     id={card.id}
                     type={card.type}
                     width={dimension / 4.5}
                     height={dimension / 4.5}
                     flipped={flipped.includes(card.id)}
                     solved={solved.includes(card.id)}
                     handleClick={handleClick}
                     disabled={disabled || solved.includes(card.id)}
                   />
                ))}
          </div>
      }


 }

 Board.propTypes = {
   disabled: PropTypes.bool.isRequired,
   dimension: PropTypes.number.isRequired,
   cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
   flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
   solved: PropTypes.arrayOf(PropTypes.number).isRequired,
   handleClick: PropTypes.func.isRequired,
   playerMode: PropTypes.number.isRequired
 }
