import React, {Component} from 'react';

export default class EntryItem extends Component {

  handleDelete() {
    this.props.deleteEntry(this.props.entry.id);
  }
  render() {
    return (
      <tr>
        <td>{this.props.entry.entry.key}</td>
        <td>{this.props.entry.entry.value}</td>
        <td><button onClick={this.handleDelete.bind(this)}>X</button></td>
      </tr>
    );
  }
}
