import { useEffect, useState } from 'react';
import './App.css';
import { ListCmp } from './Components/ListCmp/ListCmp';
import { Store } from './Components/Redux/Store';
import { CreateTask } from './Components/CreateTask/CreateTask';
import { CreateList } from './Components/CreateList/CreateList';

function App() {
  const [data,setData] = useState(Store.getState());
  const [arrCount,setArrCount] = useState(0);

  // getting the data from Store
  Store.subscribe(()=>{
    setData(Store.getState());
  })

  useEffect(()=>{
    setArrCount(data.length);
  },[data]);

  console.log("data:",data,arrCount);

  return (
    <div className="App">
      <div>
        <CreateList />
      </div>
      <div>
        {
          data.map((el,i)=>{
            return <ListCmp key={i} arr={el} index={i} arrCount={arrCount} />
          })
        }
      </div>
    </div>
  );
}

export default App;
