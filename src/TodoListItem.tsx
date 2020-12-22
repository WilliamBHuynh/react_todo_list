import React from "react";
import "./index.css";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {

    return (
        <li className="listItem">
            <label className={todo.complete ? "listLabel" : undefined}>
                <input
                    className="checkmark"
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => toggleTodo(todo)}
                />
                {todo.text}
            </label>
        </li>
    );
}