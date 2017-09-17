import React, {Component} from 'react';
import EntryItem from './EntryItem';
export default class EntryList extends Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <td>Key</td>
          <td>Value</td>
        </tr>
        </thead>
        <tbody>
        {this.props.entries.map(entry => <EntryItem key={entry.id} entry={entry} {...this.props.actions}/>)}
        </tbody>
      </table>
    );
  }
};
