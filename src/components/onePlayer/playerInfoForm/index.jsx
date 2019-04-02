import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Board from '../board'

import './styles.css'

class playerInfoForm extends Component  {

constructor(props) {
  super(props);
  this.onHandleChange = this.onHandleChange.bind(this);

  this.filler = this.filler.bind(this);
  this.state={onePlayerNext: false, defaultPlayerName: props.onePlayerName}
}

filler() {
  console.log("this is a filler.")
}


changePlayerName(newName) {
    this.setState({
        onePlayerName: newName
    });
}



onChangePlayerName(newName) {
    this.props.changePlayerName(this.state.onePlayerName)
    this.setState({onePlayerNext: true,})
}

onHandleChange(event) {
  this.setState({
       onePlayerName: event.target.value
   });
}



render() {
  const onePlayerNext = this.state.onePlayerNext;

  if(onePlayerNext) {
    return <div className="onePlayer-Container">
      <Board changeName={this.onChangePlayerName.bind(this)} playerName={this.state.onePlayerName} playerMode={1} cards={[]} dimension={0} disabled={false} flipped={[]} solved={[]} handleClick={this.filler} />
    </div>
  }

  return (
    <form onSubmit={this.handleSubmit} className="playerInfoForm">
     <div className="playerInfoContainer">
      <label>
       <span className="question">What's your name?</span>
       <textarea onChange={(event) => this.onHandleChange(event)} className="playerNameInput" />
      </label>
      <input onClick={this.onChangePlayerName.bind(this)} className="playerInfoInput" type="submit" />
     </div>
    </form>
  );
}

}

export default playerInfoForm


playerInfoForm.propTypes = {
  defaultPlayerName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
}
