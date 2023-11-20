import styles from './CreateList.module.css';
import {Store} from '../Redux/Store';

const CreateList = () => {
    const handleCreateList = () => {
        Store.dispatch({
            type : "create-list"
        })
    }

    return <div>
        <button onClick={handleCreateList}>Create a New List</button>
    </div>
}

export {CreateList};