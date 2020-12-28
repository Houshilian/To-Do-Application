import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { fetchTodos, toggleTodo, deleteTodo, toggleTab } from '../actions';
import { TABS } from '../actions/types';

class TodoList extends Component {
  componentDidMount = async () => {
    this.props.fetchTodos();
    try {
      setInterval(async () => {
        this.props.fetchTodos();
      }, 10000);
    } catch (e) {
      console.log(e);
    }
  };

  removeComplete = () => {
    this.props.todos.forEach(({ done, _id }) => {
      if (done) this.props.deleteTodo(_id);
    });
  };

  renderTodos = todos => {
    return todos.map(todo => {
      return (
        <Todo
          key={todo._id}
          id={todo._id}
          name={todo.name}
          description={todo.description}
          duedate={todo.duedate}
          time={todo.time}
          done={todo.done}
          toggleTodo={() => this.props.toggleTodo(todo._id)}
          deleteTodo={() => this.props.deleteTodo(todo._id)}
        />
      );
    });
  };

  renderTabs = currTab => {
    return TABS.map(tab => {
      return (
        <button
          key={tab}
          className={tab === currTab ? 'button selected' : 'button'}
          onClick={() => this.props.toggleTab(tab)}
        >
          {tab}
        </button>
      );
    });
  };

  render() {
    let todos = [];

    if (this.props.currTab === 'All') {
      todos = this.props.todos;
    } else if (this.props.currTab === 'Incomplete') {
      todos = this.props.todos.filter(todo => !todo.done);
    } else if (this.props.currTab === 'Completed') {
      todos = this.props.todos.filter(todo => todo.done);
    }

    return (
      <article>
        <TodoForm />
        <div>
          {this.props.todos.length ? this.renderTabs(this.props.currTab) : null}
          {this.props.todos.some(todo => todo.done) ? (
            <button className="button clear" onClick={this.removeComplete}>
              remove done
            </button>
          ) : null}
        </div>

        <ul style={{ paddingLeft: 10 }} className="list">
          {this.renderTodos(todos)}
        </ul>
      </article>
    );
  }
}

const mapStateToProps = ({ todos, currTab }) => {
  return { todos, currTab };
};

export default connect(
  mapStateToProps,
  { fetchTodos, toggleTodo, deleteTodo, toggleTab }
)(TodoList);
