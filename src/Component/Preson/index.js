import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPersonAction} from '../../redux/actions/person'

class Person extends Component {

    addPerson =()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const NewPerson={id:nanoid(),name:name,age:age}
        this.props.add_person(NewPerson)
        this.nameNode.value =''
        this.ageNode.value =''
    }
    render() {
        return (
            <div>
                <h2>我是person组件</h2>
                <input ref={c => this.nameNode=c} type="text" placeholder="请输入姓名"/>
                <input ref={c=>this.ageNode =c} type="text" placeholder="请输入年龄"/>
                &nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.person.map((personObj)=>{
                            return <li key={personObj.id}>
                                名字：{personObj.name}，年龄：{personObj.age}
                            </li>
                        })

                    }

                </ul>
            </div>
        );
    }
}
export default  connect(
    state =>({person:state.persons})
, {
        add_person:addPersonAction
    }
)(Person)
