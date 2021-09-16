import React, {useContext, useState} from "react";
import countContext from './Example2'
function Test() {
    const [value,setValue]=useState('')
    const count=useContext(countContext)
        return (
            <div>
                <input onChange={(e)=>{
                    setValue(e.target.value)
                }} value={value} type="text"/>
                <button onClick={()=>{console.log(value)}}> 点击加载数值 </button>
                <p>{count} </p>
            </div>
        )
}
export default Test