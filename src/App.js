import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    num: 12,
    input: '',
    passwordGenerated: false 
  }

  passwordGenerator = (passwordNeededLength) => {
    const characters = ['a','b','c','d','e','f','g','!' ,'@','$','%','k','l', 'm', 'n','o','p','2','4','6','7','8','9', 'Q', 'R', 'S','T','U','V','W','X','Y', 'Z']
    let string = ''
    let count = 0 
    while (count < passwordNeededLength){
        let randomChar = Math.floor(Math.random() * characters.length)
        string = string + characters[randomChar]
        count ++ 
    }
    return string
}

handleOnChange = e => this.setState({ input: e.target.value })

handleOnClick = () => {
  let newState = ''
  if (this.state.input === ''){
    newState = { passwordGenerated: true }
  } else {
    newState = { num: this.state.input, input: '', passwordGenerated: true }
  }
  this.setState( newState )
}


backToNormal = () => this.setState({ num: 12, input: '', passwordGenerated: false })

  render(){
  if (this.state.passwordGenerated) 
    return (
    <div className="App">
      <br></br>
      <h2 id='text'>{this.passwordGenerator(parseInt(this.state.num))}</h2>
      <br></br>
      <button id='button' className='ui button' onClick={this.backToNormal}>Another Password</button>
    </div>
    )
    return (
  <div className="App">
    <br></br>
    <h3 id='text'>Password Length?</h3>
    <br></br>
    <div className='ui input'>
      <input id='text' placeholder='12 digits...' value={this.state.input} onChange={this.handleOnChange}></input>
    </div>
    <br></br>
    <br></br>
    <button id='button' className='ui button' onClick={this.handleOnClick}>Give Me A Password</button>
  </div>
)
  }
}

export default App;
