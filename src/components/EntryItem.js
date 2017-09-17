import React, {Component} from 'react';
import EntryInput from './EntryInput';

export default class EntryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditable: false
    };
  }

  handleDelete() {
    this.props.deleteEntry(this.props.entry.id);
  }

  handleDoubleClick() {
    this.setState({isEditable: !this.state.isEditable});
  }

  render() {
    let element;
    if (this.state.isEditable) {
      element = (<EntryInput entry={this.props.entry} isNew={false} editEntry={this.props.editEntry}/>);
    } else {
      element = (<div>
        <td>{this.props.entry.entry.key}</td>
        <td>{this.props.entry.entry.value}</td>
        <td>
          <button onClick={this.handleDelete.bind(this)}>X</button>
        </td>
      </div>);
    }
    return (
      <tr onDoubleClick={this.handleDoubleClick.bind(this)}>
        {element}
      </tr>
    );
  }
};
