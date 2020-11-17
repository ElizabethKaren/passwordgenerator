import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    num: 12,
    input: '',
    passwordGenerated: false 
  }

  passwordGenerator = (passwordNeededLength=12) => {
    const characters = ['a','b','c','d','e','f','g','!' ,'@','$','%','k','l', 'm', 'n','o','p','2','4','6','7','8','9', 'Q', 'R', 'S','T','U','V','W','X','Y', 'Z']
    let string = ''
    let length = passwordNeededLength
    let count = 0 
    while (count < length){
        let randomChar = Math.floor(Math.random() * characters.length)
        string = string + characters[randomChar]
        count ++ 
    }
    return string
}

handleOnChange = e => this.setState({ input: e.target.value })

handleOnClick = () => this.setState({ num: this.state.input, passwordGenerated: true  })

  render(){
  if (this.state.passwordGenerated) return <div className="App"><h2>{this.passwordGenerator(parseInt(this.state.num))}</h2></div>
    return (
  <div className="App">
    <h3>How Long Does your Password Need to be?</h3>
    <input placeholder='Numbers..' value={this.state.input} onChange={this.handleOnChange}></input>
    <br></br>
    <button onClick={this.handleOnClick}>Submit</button>
    
  </div>
)
  }
}

export default App;
