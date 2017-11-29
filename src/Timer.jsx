import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      newStartCountDown: 0
    }
  }

  setAndStartCountValue() {
    this.setState({count: this.state.newStartCountDown});

    this.startCountDown();
  }

  startCountDown() {
    let timer = setInterval(() => {
      let newCount = this.state.count - 1;

      if (this.state.count <= 0) {
        clearInterval(timer);
        this.timeOut();

        return
      }

      this.setState({count: newCount});
    }, 1000);
  }

  timeOut() {
    window.alert('Time out!!');
  }

  render() {
    return (
      <div className="Timer">
        <div className="Timer-title">Time: {this.state.count}</div>
        <div className="Timer-label">Insert the number of Counting down</div>
        <input type="number" onChange={(event) => this.setState({newStartCountDown: event.target.value})} />
        <button onClick={ () => this.setAndStartCountValue() }>Start count</button>
      </div>
    )
  }
}

export default Timer;
