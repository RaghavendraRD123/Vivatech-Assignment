import { useState } from "react";
import { Store } from "../Redux/Store";
import styles from './TaskCard.module.css';

const TaskCard = ({index,name,status}) => {
    const [show,setShow] = useState(false);
    const [newName,setNewName] = useState(name)

    const handleStatus = () => {
        Store.dispatch({
            type : "update-status",
            payload : {
                index , status
            }
        })
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setNewName(value);
    }

    const handleUpdate = (e) => {
        Store.dispatch({
            type : "update-task",
            payload : {
                index , status , newName
            }
        })
    }

    const handleDelete = () => {
        Store.dispatch({
            type : "delete-task",
            payload : {
                index , status
            }
        })
    }

    return <div id={styles.main} style={{
        border : status ? "2px solid green" : "2px solid red",
    }}>
        <h1 style={{
            color : status ? "green" : "red"
        }}>{name}</h1>
        <div id={styles.cont1}>
            <button 
                style={{
                    backgroundColor : status ? "#ff0000cc" : "#008000cc"
                }} 
                onClick={handleStatus}
            >{status ? "incompleted" : "completed"}</button>
            <button 
                onClick={()=>{
                    setShow(pre=>!pre)}
                }
            >Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        {
            show ?
            <div className={styles.update}>
                <div>
                    <label>Name </label>
                    <input onChange={handleChange} value={newName} type="text"/>
                </div>
                <button onClick={handleUpdate}>Submit</button>
            </div>
            : null
        }
    </div>
}

export {TaskCard};