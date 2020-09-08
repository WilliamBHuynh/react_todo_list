import React from 'react';
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Docker tutorial", complete: true },
  { text: "Workout", complete: false }
];

const App: React.FC = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]}></TodoListItem>
      <TodoListItem todo={todos[1]}></TodoListItem>
      <TodoListItem todo={todos[2]}></TodoListItem>
    </React.Fragment>
  );
}

export default App;
