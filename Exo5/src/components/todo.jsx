import { useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";


const Todo = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <>
            <TodoForm addTask={setTasks}/>
            <TodoList list={tasks} addTask={setTasks} />
        </>
    )
}

export default Todo;