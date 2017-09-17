import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EntryList from './components/EntryList';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import EntryInput from './components/EntryInput';
import {bindActionCreators} from 'redux';
import * as EntryActions from './actions/entries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EntryInput addEntry={this.props.actions.addEntry}/>
        <EntryList entries={this.props.entries} actions={this.props.actions}/>
      </div>
    );
  }
}

App.propTypes ={
  entries: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  entries: state.entries
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(EntryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
