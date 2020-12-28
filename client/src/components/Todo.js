import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';

class Todo extends Component {
  constructor(props){
    super (props);
    this.state = {
      isOn: true,
      display: 'none'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleDeleteTodo = e => {
    e.stopPropagation();
    this.props.deleteTodo();
  };

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn,
      display: prevState.isOn ? 'block' : 'none' 
    }));
  };

  render() {
    const { name, done, description, duedate, time, toggleTodo } = this.props;

    return (
      <table>
        <li
          className="task"
          style={{
            textDecoration: done ? 'line-through' : '',
            color: done ? '#bdc3c7' : '#34495e'
          }}
        >
          <span style={{ display: this.state.editing ? 'none' : '' }} 
            onClick={toggleTodo}>
            {name}
          </span>
          <form
            className="form"
            style={{ display: this.state.editing ? 'inline' : 'none' }}
            onSubmit={this.onFormSubmit}
          >
          </form>
          <span className="icon edit" onClick={this.handleClick}>
            {this.state.isOn}<i className="fas fa-caret-down" />
          </span>
          <span className="icon" onClick={this.handleDeleteTodo}>
            <i className="fas fa-trash"/>
          </span>
        </li>
        
        <div style={{display: this.state.display}}>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Due Date</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>{description}</td>
              <td>{duedate}</td>
              <td>{time}</td>
            </tr>
          </tbody>
        </div>
      </table>
    );
  }
}

export default connect(
  null,
  { updateTodo }
)(Todo);
