import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Temp from'./components/Temp/Temp'

export default class App extends Component {
  render() {
    return (
      <div>
        <Temp/>
      </div>
    )
  }
}
