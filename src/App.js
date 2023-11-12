import './App.css';
import Hello from './Hello';
import Clock from './clock'
import React from 'react'


class  App extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      count : 0
    }
  }

  render(){
    return (
      <div className="App">
        <p>Test de React</p>
        <Hello color="red" name="Alex" />
        <Clock />
      </div>
    );
  }
}
export default App;
