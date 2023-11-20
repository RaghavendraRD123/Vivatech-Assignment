/*
TaskCard component : 
use to display the dettails of a particular task 
*/
import { useRef, useState } from "react";
import { Store } from "../Redux/Store";
import styles from './TaskCard.module.css';


const TaskCard = ({arrCount,index,el,i }) => {
    const {name ,status} = el;
    const [show,setShow] = useState(false);
    const [newTask,setNewTask] = useState(el);
    const [moveTo,setMoveTo] = useState(1);
    const green = (status == "completed") ? true : false;

    // to handle update for a task :
    const handleChange = (e) => {
        const elValue = e.target.value;
        const elName = e.target.name;
        setNewTask(pre=>{
            return {...pre,[elName] : elValue}
        })
    }

    // to update a particular task :
    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("updated:",newTask);
        Store.dispatch({
            type : "update-task",
            payload : newTask,
            index,
            taskNo : i
        })
    }

    // to delete a particular task :
    const handleDelete = () => {
        Store.dispatch({
            type : "delete-task",
            index ,
            taskNo : i
        })
    }

    // to handle the value where we want to move our task
    const handleMoveValue = (e) => {
        setMoveTo(Number(e.target.value))
    }

    // moving the task to selected list number (moveTo)
    const handleTaskMove = () => {
        if((index+1) != moveTo && moveTo <= arrCount && moveTo>0){ 
            Store.dispatch({
                type : "move-task",
                index ,
                taskNo : i,

                /* 
                    the moving array/list index is going to be (moveTo - 1).
                    because, array indexing stars from 0 
                    & lists are stored here in array format
                */
                moveTo : moveTo-1
            })
        }else{
            alert(`moving from list ${index+1} to ${moveTo} is impossible`);
            return;
        }
    }

    return <div id={styles.main} style={{
        border : green ? "2px solid green" : "2px solid red",
        backgroundColor : green ? "#0080001f" : "#ff00000d"
    }}>
        <div  style={{
            color : green ? "green" : "red"
        }}>
            <h1>{name}</h1>
            <h3>{status}</h3>
        </div>
        <div id={styles.cont1}>         
            <div>
                <button onClick={()=>{setShow(pre=>!pre)}} >Update</button>
                <button onClick={handleDelete} >Delete</button>
            </div>
            <div className={styles.borderBox}>
                <input type="number" value={moveTo} onChange={handleMoveValue} min={1} max={arrCount} />
                <button onClick={handleTaskMove}>Move</button>
            </div>
        </div>
        {
            show ?
            <form onSubmit={handleUpdate} >
                <div className={styles.update}>
                    <input name="name" value={newTask.name} onChange={handleChange} type="text" required />
                    <select name="status" value={newTask.status} onChange={handleChange} >
                        <option value={"completed"}>Completed</option>
                        <option value={"incompleted"}>Incompleted</option>
                    </select>
                    <button type="submit">Update task</button>    
                </div>
            </form>
            : null
        }
    </div>
}

export {TaskCard};
