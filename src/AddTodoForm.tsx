import React, { ChangeEvent, useState, FormEvent } from "react";

interface AddTodoFormProps {
    addTodo: AddToDo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");
    }
    return (
        <form>
            <input className="inputBox" type="text" value={newTodo} placeholder="enter task" onChange={handleChange} />
            <button className="button" type="submit" onClick={handleSubmit}>add</button>
        </form>
    );
};