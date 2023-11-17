import { useState } from "react";

const initialState = {
    incomplete : [],
    complete : []
};

const Reducer = (state=initialState,action) => {
    const {type, payload } = action;
    console.log("store:",action)
    switch(type) {
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
        default : return state;
    }
}

export {Reducer};