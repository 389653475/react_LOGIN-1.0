import React  from 'react';
import Contest from "./Contest";
import Submit from "./Submit";
//用于路由跳转
function Context(){
    return(
        <div>
            <Contest/>
            <Submit/>
        </div>
    )
}

export default Context;