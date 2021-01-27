import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    num: 12,
    input: '',
    passwordGenerated: false,
    passWordGumble: false
  }

  wordGumble = input => {
    let answer = ''
    let count = 0 
    while (count < input.length){
      let randomChar = Math.floor(Math.random() * input.length)
      answer = answer + input[randomChar]
      count ++ 
    }
      return answer
  }

  passwordGenerator = (passwordNeededLength) => {
    const characters = ['a','b','c','d','e','f','g','!' ,'@','$','%','k','l', 'm', 'n','o','p','2','4','6','7','8','9', 'Q', 'R', 'S','T','U','V','W','X','Y', 'Z']
    let answer = ''
    let count = 0 
    while (count < passwordNeededLength){
          let randomChar = Math.floor(Math.random() * characters.length)
          answer = answer + characters[randomChar]
          count ++ 
      }
    return answer
}

handleOnChange = e => this.setState({ input: e.target.value })

handleKeyPress = e => {
  if (e.code === 'Enter'){
    console.log(e)
    this.handleOnClick()
  }
}

handleOnClick = () => {
  let newState = ''
  if (this.state.input === ''){
    newState = { passwordGenerated: true }
  } if (!parseInt(this.state.input)) {
    alert ('Please Enter A Number to Generate Password By Length')
    newState = this.state
  } else {
    newState = { num: this.state.input, input: '', passwordGenerated: true }
  } 
  this.setState( newState )
}

lucky = () => this.setState({ passwordGenerated: true })

newPass = () => {
  if (this.state.input === ''){
    alert ('Please Enter Word or Phrase')
  } else {
    this.setState({ num: this.state.input, input: '', passWordGumble: true })
  }
}



backToNormal = () => this.setState({ num: 12, input: '', passwordGenerated: false, passWordGumble: false })

  render(){
  if (this.state.passwordGenerated) 
    return (
    <div className="App">
      <br></br>
      <br></br>
      <div id='text'>
        <p id='x' onClick={this.backToNormal}>X</p>
        <h1>{this.passwordGenerator(parseInt(this.state.num))}</h1>
      </div>
      <br></br>
      <button id='button' onClick={this.lucky}>Another Password</button>
    </div>
    )
    if (this.state.passWordGumble)
    return (
      <div className="App">
        <br></br>
        <br></br>
        <div id='text'>
          <p id='x' onClick={this.backToNormal}>X</p>
          <h1>{this.wordGumble(this.state.num)}</h1>
        </div>
        <br></br>
        <button id='button' onClick={this.backToNormal}>Another Password</button>
      </div>
      )
    return (
  <div className="App">
    <br></br>
    <h1 className='passWord'>Generate A Password</h1>
    <br></br>
    <div>
      <input id='text' placeholder='Number or Phrase' onKeyDown={this.handleKeyPress} value={this.state.input} onChange={this.handleOnChange}></input>
    </div>
    <br></br>
    <button id='button' onClick={this.lucky}>Feeling Lucky</button>
    <button id='button' onClick={this.handleOnClick}>Password A By Length</button>&nbsp;
    <button id='button' onClick={this.newPass}>Give Me A Password</button>&nbsp;
  </div>
)
  }
}

export default App;
