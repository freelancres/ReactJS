/*
import { Component } from 'react';
import Counter from './components/Counter'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
      this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <Counter counter={this.state.count} />
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
*/

import React, { useState } from 'react';
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);

  // function handleIncrement() {
  //   setCount(count + 1);
  // }
  return (
    <div>
      <Counter counter={count} />
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  );
}


export default App;