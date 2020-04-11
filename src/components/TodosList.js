import React from "react";
import TodoItem from "./TodoItem";

class TodosItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </div>
    );
  }
}

export default TodosItem;
