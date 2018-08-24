import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./components/table";
import Form from "./components/form";

import "./styles.css";

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    this.setState({
      characters: this.state.characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <br />
        <div>Add new person:</div>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
