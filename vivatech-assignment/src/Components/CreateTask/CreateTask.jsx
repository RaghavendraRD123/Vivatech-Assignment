import { useState } from "react";
import { Store } from "../Redux/Store";
import styles from './CreateTask.module.css';

const CreateTask = () => {
    const [newTask,setNewTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Store.dispatch({
            type : "add-task",
            payload : newTask
        })
        setNewTask("");
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setNewTask(value);
    }

    return <form className={styles.main} onSubmit={handleSubmit}>
            <input value={newTask} onChange={handleChange} type="text" required />
            <button type="submit">Add task</button>
        </form>
}

export {CreateTask};