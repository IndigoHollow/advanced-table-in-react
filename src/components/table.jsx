import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <td>NAME</td>
        <td>JOB</td>
        <td>ACTION</td>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.job}</td>
        <td>
          <button
            onClick={() => {
              props.removeCharacter(index);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default class Table extends React.Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={this.props.characterData}
          removeCharacter={this.props.removeCharacter}
        />
      </table>
    );
  }
}
