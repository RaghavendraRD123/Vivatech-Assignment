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


/*
const initialState = {
    incomplete : [],
    complete : []
};

case "add-task" : return {...state,
                            incomplete : [...state.incomplete,payload]
                        }
        case "update-status" :if(payload.status){
                                    let val ;
                                    let res = state.complete.filter((el,i)=>{
                                        if(i !== payload.index){
                                            return el;
                                        }else{
                                            val = el;
                                        }
                                    })
                                    console.log("updating...",val,res)
                                    return {complete:res,incomplete:[...state.incomplete,val]}
                                }else{
                                    let val ;
                                    let res = state.incomplete.filter((el,i)=>{
                                        if(i !== payload.index){
                                            return el;
                                        }else{
                                            val = el;
                                        }
                                    })
                                    console.log("updating...",val,res)
                                    return {incomplete:res,complete:[...state.complete,val]}
                                }

        case "delete-task" :  if(payload.status){
                                let res = state.complete.filter((el,i)=>{
                                    if(i !== payload.index){
                                        return el;
                                    }
                                })
                                console.log(res)
                                return {...state,complete:res}
                            }else{
                                let res = state.incomplete.filter((el,i)=>{
                                    if(i !== payload.index){
                                        return el;
                                    }
                                })
                                return {...state,incomplete:res}
                            }
        case "update-task" : if(payload.status){
                                let res = state.complete.map((el,i)=>{
                                    if(i !== payload.index){
                                        return el;
                                    }else{
                                        return payload.newName
                                    }
                                })
                                console.log(res)
                                return {...state,complete:res}
                            }else{
                                let res = state.incomplete.map((el,i)=>{
                                    if(i !== payload.index){
                                        return el;
                                    }else{
                                        return payload.newName
                                    }
                                })
                                return {...state,incomplete:res}
                            }
*/