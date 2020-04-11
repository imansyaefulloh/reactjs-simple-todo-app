import React from "react";

class InputTodo extends React.Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    // name on the attribute must be the same with the name in the state
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;
