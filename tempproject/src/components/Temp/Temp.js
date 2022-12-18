import React, { Component } from 'react'
import './Temp.css';

export default class Temp extends Component {


    constructor(props){
        super(props)

        this.state = { 
            temp: 10,
           tempClass : 'cold'
        }

        this.increaseTemp = this.increaseTemp.bind(this)
        this.decreaseTemp = this.decreaseTemp.bind(this)
    }

    increaseTemp(){
        if(this.state.temp >= 30){
            return false
        }
        this.setState(prevState => {
           return { temp:prevState.temp +1}
        })

        if(this.state.temp >= 15){
            this.setState({tempClass : 'hot'})
    }
}


    decreaseTemp() {
        if(this.state.temp <= 0){
            return false
        }
        this.setState(prevState => {
           return { temp:prevState.temp  - 1}
        })

        if(this.state.temp < 15){
            this.setState({tempClass : 'cold'})
    }
}
   




  render() {
    return (
      <div className='app-container'>
        <div className='temperature-display-container'>
            <div className='temperature-display cold'>{this.state.temp} *C</div>
        </div>

        <div className='button-container'>
         <button onClick={this.increaseTemp}> + </button>
         <button onClick={this.decreaseTemp}> - </button>
        </div>
        
      </div>
    )
  }
}
