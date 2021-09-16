import React, {createContext, useState} from "react";
import Example1 from "./Example1";
import moment from "moment";
const countContext =createContext()
function Context(){
    const [count,setCount]= useState(0)
    const date= moment().format('YYYY-MM-DD HH:mm:ss');
    return(
        <div>
            <countContext.Provider value={count}>
                <Example1/>
            </countContext.Provider>
            <button onClick={()=>{
                setCount(count+1)
            }} >点我加1</button>
            <p>
                测试时间显示{date}
            </p>
        </div>
    )
}
export default Context