import React, {useRef} from "react";
import {Button} from "antd";
import axios from "axios";
import moment from "moment";
import PubSub from 'pubsub-js'

function Submit(){

    const input_name =useRef()
    const input_submit =useRef()
    const style={
        //提交留言的样式
        width:'500px',
        height:'50px',
        marginTop: '10px',
        fontsize: '80px'
    }
    const value="请在此处输入您的留言" //留言
    const name_value= "请输入您的姓名"//名字
    const form_style=
    {
        //整个提交框的样式
        width: '1000px',
        height: '500px',
        marginLeft:'100px',
        marginTop:'10px',
        border:'1px solid ',
        padding:'30px'
    }
    function submit_button(event) {
        if (input_name.current.value===''||input_submit.current.value===''){
            alert('您没有输入完全')
        }else{// alert('提交成功');
            // console.log(time.constructor)
            // console.log(input_submit.current.value)
            // console.log(input_name.current.value)
            let name=input_name.current.value;
            let submit=input_submit.current.value
            const time=moment().format('YYYY-MM-DD HH:mm:ss')
            console.log(time,'这是对于时间的测试 传递出现错误')
            input_name.current.value=''
            input_submit.current.value =''
            //发送请求 以便于获取数据和传递数据
            axios.get(`http://127.0.0.1:8000/server`,{
                params:{
                    name:name,
                    submit:submit,
                    time:time
                }
            }).then(
                response => {
                    PubSub.publish('table',response.data)//传递消息到contest组件
                },
                error => {console.log('失败了',error);}
            )}

    }
    return(
        <div>
            <form action="" style={form_style}>
                名字 <input ref={input_name} type="text" placeholder={name_value}/><br/>
                留言<input ref={input_submit} type="text" style={style} placeholder={value}/> <br/>
                <Button type="primary" onClick={(event => {submit_button(event)})}>提交</Button>
            </form>
        </div>
    )
}
export default Submit