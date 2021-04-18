import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      curTime: null,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  }
  render() {
    return (
      <header>
        <h1>Vibrant Planner</h1>
        <div className="currentTime">
          <h4>{this.state.curTime}</h4>
        </div>
      </header>
    );
  }
}

export default Header;
