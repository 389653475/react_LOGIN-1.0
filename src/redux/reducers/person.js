import {ADD_PERSON} from "../constant";

const initState=[{
    id:'001',name:'第一个人',age:18
}]
export default function (prestate=initState,action) {
    console.log('person))))')
    const {type,data}=action
    switch (type) {
        case ADD_PERSON: return [data,...prestate]
        default :return prestate
    }
}