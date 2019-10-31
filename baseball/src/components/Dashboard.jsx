import React from 'react'

import Display from './Display'
class DashBoard extends React.Component{
    state={
        strikes:0,
        balls: 0
    }
    
    strike = () => {
        let strikeScore = this.state.strikes

        if(strikeScore >= 2){
            this.setState({balls: 0, strikes: 0})
        } else{
            this.setState({strikes: strikeScore + 1})
        }
      };
      
      ball = () => {
        let ballScore = this.state.balls

        if(ballScore >= 3){
            this.setState({balls: 0, strikes: 0})
        } else{
            this.setState({balls: ballScore + 1})
        }
      };

      foul = () => {
        let strikeScore = this.state.strikes

        if(strikeScore >= 2){
            this.setState({strikes: 2})
        } else{
            this.setState({strikes: strikeScore + 1})
        }
      };

      hit = () => {
          this.setState({balls: 0, strikes: 0})
      }

    render() {
        return(
            <div>
                <Display strikes={this.state.strikes} balls={this.state.balls} />
                <section>
                <button onClick={this.strike}>strike</button>
                <button onClick={this.ball}>ball</button>
                <button onClick={this.foul}>foul</button>
                <button onClick={this.hit}>hit</button>
                </section>
            </div>
        )
    }
}
export default DashBoard