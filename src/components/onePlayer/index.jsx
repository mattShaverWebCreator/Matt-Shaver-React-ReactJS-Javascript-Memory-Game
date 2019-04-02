import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlayerInfoForm from './playerInfoForm'
import './styles.css'

class onePlayer extends Component  {


constructor(props) {
  super(props);
  this.clickNext = this.clickNext.bind(this);
  this.state = {onePlayerNext: false, onePlayerName: "mike tyson"}
}


onChangePlayerName(newName) {
      this.setState({
          onePlayerName: newName
      });
  }

  clickNext() {
    this.setState({onePlayerNext: true})
  }


render() {

  return <div className="onePlayer-Container container">
  <h1 className="header">Welcome to One Player Mode</h1>
  <div className="playerInfoBlock block">
    <PlayerInfoForm changePlayerName={this.onChangePlayerName.bind(this)} defaultPlayerName={this.state.onePlayerName} score={0}/>
   </div>
 </div>
}
}

onePlayer.propTypes = {
  onePlayerName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}

export default onePlayer
