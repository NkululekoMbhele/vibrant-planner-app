import React, { Component } from "react";
const QuotesArray = [10];
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      quote: "What we achieve inwardly will change outer reality.",
      author: "Plutarch",
    };
  }

  componentDidMount() {
    var info = [];
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        info = data;
      });
    setInterval(() => {
      var random = Math.floor(Math.random() * 20);
      this.setState({
        quote: info[random].text,
        author: info[random].author,
      });
    }, 10000);
  }

  render() {
    return (
      <footer>
        <h5>{this.state.quote}</h5>
        <p>~ {this.state.author}</p>
      </footer>
    );
  }
}

export default Footer;
