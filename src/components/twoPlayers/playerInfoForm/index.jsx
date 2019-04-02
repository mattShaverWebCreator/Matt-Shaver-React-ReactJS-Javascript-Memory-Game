import React, { Component } from 'react'
import Board from '../board'

import './styles.css'

class playerInfoForm extends Component  {

  constructor(props) {
    super(props);
    this.onHandleChangePlayerOne = this.onHandleChangePlayerOne.bind(this);
    this.onHandleChangePlayerTwo = this.onHandleChangePlayerTwo.bind(this);
    this.state={onePlayerName: props.onePlayerName, twoPlayerName: props.twoPlayerName, onePlayerScore: props.playerOneScore, twoPlayerScore: props.playerTwoScoree}
  }

  filler() {
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



  onChangePlayerNames(playerOneName, playerTwoName) {
    this.props.changeNames(this.state.onePlayerName, this.state.twoPlayerName)
    this.setState({twoPlayersNext: true,})
}




  onHandleChangePlayerOne(event) {
    this.setState({
         onePlayerName: event.target.value
     });
  }

  onHandleChangePlayerTwo(event) {
    this.setState({
         twoPlayerName: event.target.value
     });
  }


  clickNext() {
    this.setState({twoPlayersNext: true})
  }





render(props) {
  const twoPlayersNext = this.state.twoPlayersNext;

  if(twoPlayersNext) {
    return <div className="twoPlayersNext">
           <Board changeNames={this.onChangePlayerNames.bind(this)}  onePlayerName={this.props.onePlayerName} twoPlayerName={this.props.twoPlayerName} onePlayerScore={this.props.onePlayerScore} twoPlayerScore={this.props.twoPlayerScore} cards={[]} dimension={0} disabled={false} flipped={[]} solved={[]} handleClick={this.filler} />
           </div>
  }

  return (
    <form onSubmit={this.handleSubmit} className="playerInfoForm twoPlayer">
     <div className="playerInfoContainer">
      <label>
       <span className="question">What's Player One's name?</span>
       <textarea onChange={(event) => this.onHandleChangePlayerOne(event)} className="playerNameInput" />
      </label>
      <label>
       <span className="question">What's Player Two's name?</span>
       <textarea onChange={(event) => this.onHandleChangePlayerTwo(event)} className="playerNameInput" />
      </label>
      <input onClick={this.onChangePlayerNames.bind(this)} className="playerInfoInput" type="submit" />
     </div>
    </form>
  );


}

}

export default playerInfoForm
