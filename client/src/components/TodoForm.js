import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      name: '', 
      description: '', 
      duedate: '',
      time: '' 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.name, this.state.description, this.state.duedate, this.state.time);
    this.setState({name:'', description: '', duedate: '', time: '' });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Add your title here..."
        />

        <input
          className="input"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Add your description here..."
        />
        <input
          className="input"
          type="text"
          name="duedate"
          value={this.state.duedate}
          onChange={this.handleChange}
          placeholder="Add your duedate here..."
        />
        <input
          className="input"
          type="text"
          name="time"
          value={this.state.time}
          onChange={this.handleChange}
          placeholder="Add your time here..."
        />

        <input className="submit" type="submit" value="submit"/>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
