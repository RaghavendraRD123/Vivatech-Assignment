/*
Reducer function : 
it will handle the changes in a store using switch-case
 */

const initialState = [];

const Reducer = (state=initialState,action) => {
    const {type, payload,index,taskNo,moveTo } = action;
    // console.log("store:",action)
    switch(type) {
        case "create-list" :return [...state,[]];

        case "add-task"    :return state.map((el,i)=>{
                                if(i == index){
                                    return [...el,payload]
                                }else{
                                    return el;
                                }
                            })

        case "update-task" :let updatedArr = state.map((el,i)=>{
                                if(i == index){
                                    let newArr = el.map((task,j)=>{
                                        if(taskNo == j){
                                            return payload;
                                        }else{
                                            return task;
                                        }
                                    })
                                    return newArr;
                                }else{
                                    return el;
                                }
                            })
                            return updatedArr;

        case "delete-task" :let deletedArr = state.map((el,i)=>{
                                if(i == index){
                                    let newArr = el.filter((task,j)=>{
                                        if(taskNo !== j){                             
                                            return task;
                                        }
                                    })
                                    return newArr;
                                }else{
                                    return el;
                                }
                            })
                            return deletedArr;   

        case "move-task"   :let moveTask ;
                            let sourceArr = state.map((el,i)=>{
                                if(i == index){
                                    let newArr = el.filter((task,j)=>{
                                        if(taskNo !== j){                             
                                            return task;
                                        }else{
                                            moveTask = task;
                                        }
                                    })
                                    return newArr;
                                }else{
                                    return el;
                                }
                            })
                            // console.log("move ::",moveTask,sourceArr);

                            let destArr = sourceArr.map((el,i)=>{
                                if(i == moveTo){
                                    return [...el,moveTask]
                                }else{
                                    return el;
                                }
                            })
                            return destArr;

        default            :return state;
    }
}

export {Reducer};


