import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    job: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clearState = () => {
    this.setState({
      name: "",
      job: ""
    });
  };

  submitForm = () => {
    // если данные ввели => вызов обработчика добавления записи с параметром
    !this.state.name || !this.state.job
      ? console.log("enter some data")
      : this.props.handleSubmit(this.state);
    // очистка состояния после добавления записи
    this.clearState();
  };

  render() {
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}
