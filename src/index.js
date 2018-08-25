import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./components/table";
import Form from "./components/form";
import "./styles.css";

class App extends Component {
  state = {
    defaultdata: [
      {
        name: "Test1",
        job: "programmer"
      },
      {
        name: "Test2",
        job: "cashier"
      }
    ],
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

  loadDefault = () => {
    this.setState({ characters: this.state.defaultdata });
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
        <br />
        <br />
        <input
          type="button"
          value="Load default data"
          onClick={this.loadDefault}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
