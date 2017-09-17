import React, {Component} from 'react';
export default class EntryInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      value: ''
    }
  }

  handleChange(e) {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    this.setState({[fieldName]: fieldValue});
  }

  handleAdd() {
    this.props.addEntry({key: this.state.key, value: this.state.value});
  }
  render() {
    return (
      <div>
        <input name="key" value={this.state.key} onChange={this.handleChange.bind(this)}/> <br/>
        <input name="value" value={this.state.value} onChange={this.handleChange.bind(this)}/><br/>
        <button onClick={this.handleAdd.bind(this)}>Add</button>
      </div>
    )
  }
}
