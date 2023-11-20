/*
    CreateTask component :
    used to create a new tak for the list
    initially the tasks will have the status as incomplete
*/

import { useRef, useState } from "react";
import { Store } from "../Redux/Store";
import styles from './CreateTask.module.css';

const initial = {
    name : "" ,
    status : "incompleted"
}

const CreateTask = ({index}) => {
    const [newTask,setNewTask] = useState(initial);
    const handleSubmit = (e) => {
        e.preventDefault();
        Store.dispatch({
            type : "add-task",
            index ,
            payload : newTask
        })

        setNewTask(initial);
        
        console.log("task : ",newTask);
    }

    const handleChange = (e) => {
        const elValue = e.target.value;
        const elName = e.target.name;
        setNewTask(pre=>{
            return {...pre,[elName] : elValue}
        })
    }

    return <form className={styles.main} onSubmit={handleSubmit}>
            <input name="name" value={newTask.name} onChange={handleChange} type="text" required />
            <select name="status" value={newTask.status} onChange={handleChange} >
                <option value={"completed"}>Completed</option>
                <option value={"incompleted"}>Incompleted</option>
            </select>
            <button type="submit">Add task</button>
        </form>
}

export {CreateTask};