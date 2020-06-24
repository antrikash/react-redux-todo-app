import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "./TodoTextInput";

const Header = ({ addTodo }) => (
  <header className="header">
    <h1> todo list</h1>
    <TodoTextInput
      newTodo
      onSave={text => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="Add todo and hit enter"
    />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
