import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {NavLink, useHistory} from "react-router-dom";
import axios from "axios";
//登录页面
function Login () {
    let history = useHistory();
    let username_exist=false
    const onFinish = (values) => {
        axios.get(`http://127.0.0.1:8000/Login`,).then(
            response => {
                response.data.map((item)=>{
                    if (values.username.replace(/\s*/g,"")===item.username){
                        username_exist=true
                        if (values.password===item.password){
                            history.push("/context");
                        }else{
                            alert('用户名或密码错误')
                        }
                    }

                })
                if (!username_exist){
                    alert('用户名不存在')
                }
            },
            error => {console.log('失败了',error);}
        )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        alert('请输入密码')
    };


    return (
        <div>
        <Form
            name="basic"
            labelCol={{
                span: 6,
            }}
            wrapperCol={{
                span: 10,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="用户名"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 6,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 6,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    submit
                </Button>
            </Form.Item>
        </Form>
            <NavLink to="/register">
                <Button type="primary">注册</Button>
            </NavLink>
        </div>
    );
}

export default Login