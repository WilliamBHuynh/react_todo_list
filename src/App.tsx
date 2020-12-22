import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from "./TodoList";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Docker tutorial", complete: true },
  { text: "Workout", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddToDo = (addToDo: string) => {
    if (addToDo.length === 0) {
      return null;
    }
    setTodos([...todos, { text: addToDo, complete: false }]);
  }
  return (
    <React.Fragment>
      <div>
        <div>
          <AddTodoForm addTodo={addTodo} />
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </React.Fragment>
  );
}

export default App;
