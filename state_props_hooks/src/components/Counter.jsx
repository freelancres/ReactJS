/*import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
    super(props)
}



  render() {
    return (
      <div>
        <h1>Count: {this.props.counter}</h1>
      </div>
    );
  }
}
*/

import React from 'react'

const Counter = ({ counter }) => {
  // const { counter } = props;
  return (
    <div>
      <h1>Count : {counter}</h1>
    </div>
  );
};

export default Counter;
