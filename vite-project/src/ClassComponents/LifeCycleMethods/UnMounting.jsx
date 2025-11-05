import React, { Component } from 'react'

export default class UnMounting extends Component {

    state ={
        time: 0
    }

    componentDidMount() {
        //start a timer when the component mount
        this.timer = setInterval(()=>{
            this.setState(prevState=>({
                time:prevState.time + 1
            }))

        },1000)
    }

    componentWillUnmount (){
        clearInterval(this.timer);
        console.log("Timer Cleaned Up!");
        
    }
  render() {
    return (
      <div>
        <h2>Time: {this.state.time}seconds</h2>
      </div>
    )
  }
}
