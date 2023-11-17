import './App.css';
import Hello from './Hello';
import Clock from './clock'
import React from 'react'
import Input from './input';
import { Counter } from './Counter';
import { Horloge } from './horloge';


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
         <Counter color='red'></Counter>
         <Counter color='green'></Counter>
         <Horloge></Horloge>
      </div>
    );
  }
}
export default App;
