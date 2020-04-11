import React from "react";

class TodosItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => (
          <li key={i}>{todo.title}</li>
        ))}
      </div>
    );
  }
}

export default TodosItem;
