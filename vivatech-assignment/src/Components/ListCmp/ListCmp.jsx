import { CreateTask } from "../CreateTask/CreateTask";
import { TaskCard } from "../TaskCard/TaskCard";
import styles from './ListCmp.module.css';
var XLSX = require("xlsx");

const ListCmp = ({arrCount,arr,index}) => {
    
  // Export the entire list to Excel 
  const handleOnExport = () => {
    let wb = XLSX.utils.book_new(),
    ws = XLSX.utils.json_to_sheet(arr);

    XLSX.utils.book_append_sheet(wb,ws,"MySheet1")

    XLSX.writeFile(wb,"myExcel.xlsx")
  }
    
    return <div className={styles.main}>

            {/* list name : */}
            <h1>List : {index + 1}</h1>
            
            <button className={styles.button} onClick={handleOnExport}>Export to Excel</button>

            {/* CreateTask : used to create a new task */}
            <CreateTask index={index} />

            <div  className={styles.cont} >
                {
                arr.map((el,i)=>{
                    const new_key = i + "k" + Math.trunc((Math.random()*100));

                    // Display each task in as a card 
                    return <TaskCard index={index} el={el} i={i} key={new_key} arrCount={arrCount} />
                })
                }
            </div>
        </div>
}

export {ListCmp};