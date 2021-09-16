import {INCREMENT,DECREMENT} from "../constant";
export const incrementAction=data=>({type:INCREMENT,data:data})
export const decrementAction=data=>({type:DECREMENT,data:data})

export const incrementAsyncAction= (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(incrementAction(data))
        },time)
    }

}