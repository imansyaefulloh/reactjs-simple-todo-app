import React from "react";

class InputTodo extends React.Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    // name on the attribute must be the same with the name in the state
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form>
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
