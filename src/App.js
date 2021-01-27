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
      <br></br>
      {/* <p id='x' onClick={this.backToNormal}>X</p> */}
      <h1 id='text'>{this.passwordGenerator(parseInt(this.state.num))}</h1>
      <br></br>
      <button id='button' onClick={this.handleOnClick}>Another Password</button>
    </div>
    )
    return (
  <div className="App">
    <br></br>
    <h1 className='passWord'>Password Length?</h1>
    <br></br>
    <div>
      <input id='text' placeholder='12 digits...' value={this.state.input} onChange={this.handleOnChange}></input>
    </div>
    <br></br>
    <button id='button' onClick={this.handleOnClick}>Give Me A Password</button>
  </div>
)
  }
}

export default App;
