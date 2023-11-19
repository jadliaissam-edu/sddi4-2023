import './App.css';
import Hello from './Hello';
import Clock from './clock'
import React from 'react'
import Input from './input';
import { Counter } from './Counter';
import { Horloge } from './horloge';
import Age  from './age_display';
import UserList from './user_list';


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
        <UserList/>
      </div>
    );
  }
}
export default App;
