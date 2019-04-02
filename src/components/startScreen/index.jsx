import React, { Component } from 'react'
import TwoPlayers from '../twoPlayers'
import OnePlayer from  '../onePlayer'

import './styles.css'
import logo from './logo.png'

class startScreen extends Component  {

constructor(props) {
  super(props);
  this.handleOnePlayer = this.handleOnePlayer.bind(this);
  this.handleTwoPlayers = this.handleTwoPlayers.bind(this);
  this.twoPlayersNext = this.twoPlayersNext.bind(this);
  this.state = {isOnePlayer: false, isTwoPlayers: false, isPlayersNext: false}
}

  handleOnePlayer() {
    this.setState({isOnePlayer: true});
  }

  handleTwoPlayers() {
    this.setState({isTwoPlayers: true})
  }

  twoPlayersNext() {
    this.setState({isPlayersNext: true})
  }


render() {

  const isOnePlayer = this.state.isOnePlayer;
  const isTwoPlayers = this.state.isTwoPlayers;
  const isPlayersNext = this.state.isPlayersNext;

   if(isOnePlayer) {
    return <OnePlayer onePlayerName="Player" score={0} />
   }

   if(isTwoPlayers) {
     return <TwoPlayers onePlayerName="Player" twoPlayerName="Donkey Kong" playerOneScore={0} playerTwoScore={0} />
    }

   if(isPlayersNext) {
     return <TwoPlayers onePlayerName="Player" twoPlayerName="Donkey Kong" playerOneScore={0} playerTwoScore={0} />
   }

  return <div
  className="startScreen-Container container">
  <img alt="logo" className="startScreen-Logo logo" src={logo} />
  <h1 className="header">Let's Learn About React!</h1>
  <h3 className="startScreen-subHeader h3">How many people are playing this time?</h3>
  <button onClick={this.handleOnePlayer} className="startScreen-Button1">One Player</button>
  <button onClick={this.handleTwoPlayers} className="startScreen-Button2">Two Players</button>
  <span className="generalSpan span">Built with ☕💖 by <a href="http://websitedesignnorthcarolina.com">Matt Shaver</a></span>
  </div>

}

}


startScreen.propTypes = {
}

export default startScreen
