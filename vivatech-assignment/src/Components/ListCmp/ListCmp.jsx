import { TaskCard } from "../TaskCard/TaskCard";
import styles from './ListCmp.module.css';

const ListCmp = ({arr,status}) => {
    
    return <div className={styles.main}>
            <h1>{status ? "Completed list" : "Incompleted list"}</h1>
            <div  className={styles.cont} >
                {
                arr.map((el,i)=>{
                    const new_key = i + "k" + Math.trunc((Math.random()*100));
                    return <TaskCard index={i} status={status} name={el} key={new_key} />
                })
                }
            </div>
        </div>
}

export {ListCmp};