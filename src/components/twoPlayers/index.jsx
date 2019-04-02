import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PlayerInfoForm from './playerInfoForm'
import Board from './board'


import './styles.css'
import logo from './logo.png'

class twoPlayers extends Component  {

constructor(props) {
  super();
  this.clickNext = this.clickNext.bind(this);
  this.state = {
  twoPlayersNext: false,
  onePlayerName: props.onePlayerName,
  twoPlayerName: props.twoPlayerName,
  playerOneScore: props.onePlayerScore,
  playerTwoScore: props.twoPlayerScore,
  }
}

clickNext() {
  this.setState({twoPlayersNext: true})
}



  changePlayerTwoName(newName) {
    this.setState({
        twoPlayerName: newName
    });
  }

  changePlayerOneName(newName) {
      this.setState({
          onePlayerName: newName
      });
  }

onChangeNames(playerOneName,playerTwoName,props) {
            console.log(playerOneName)
            console.log(playerTwoName)
           console.log("changing name one,two")

        this.setState({
            onePlayerName: playerOneName,
            twoPlayerName: playerTwoName
        });
}



render() {

        return <div className="twoPlayers-Container container">
        <h1 className="header">Welcome to Two Player Mode ⚔️</h1>
        <div className="playerInfoBlock">
          <PlayerInfoForm onePlayerName={this.state.onePlayerName} twoPlayerName={this.state.twoPlayerName} changeNames={this.onChangeNames.bind(this)} playerOneScore={this.playerOneScore} playerTwoScore={this.playerTwoScore}/>
         </div>
       </div>
}

}


twoPlayers.propTypes = {
  onePlayerName: PropTypes.string.isRequired,
  twoPlayerName: PropTypes.string.isRequired,
  playerOneScore: PropTypes.number.isRequired,
  playerTwoScore: PropTypes.number.isRequired,
}

export default twoPlayers
