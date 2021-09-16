import React, {useEffect} from "react";
import {Table} from "antd";
import PubSub from 'pubsub-js'
import axios from "axios";

function Contest() {
    function dateFunction(time){
	return time.replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
    }
    const columns = [
        { title: '名字', dataIndex: 'name', key: 'name' },
        { title: '留言时间', dataIndex: 'time', key: 'time' },
        { title: '留言内容', dataIndex: 'content', key: 'content' },
    ];
    const [data,setData] = React.useState([]);
    const [sum,setSum]=React.useState(0)

    useEffect(()=>{
        console.log('生命周期钩子调用');
        axios.get(`http://127.0.0.1:8000/mysql`,).then(
            response => {
                response.data.map((item)=>{
                    item.time = dateFunction(item.time)
                })
                setData(response.data)
            },
            error => {console.log('失败了',error);}
        )
        PubSub.subscribe('table',(a,table_data)=>{//对于订阅的消息传入之后进行重新渲染
            setSum(1)
        })
    },[sum])

    return(
        <div>
            <Table
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}
export default Contest