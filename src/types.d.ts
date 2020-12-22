type Todo = {
    text: string,
    complete: boolean
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddToDo = (addTodo: string) => void;

type removeTodo = (selectedTodo: Todo) => void;