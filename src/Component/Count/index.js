import React, {Component} from 'react';

class Count extends Component {

    increment =()=>{
            const {value}=this.selectNumber
            this.props.increment(value)
    }
    decrement =()=>{
        const {value}=this.selectNumber
        this.props.decrement(value)
    }
    incrementOdd =()=>{
        const {value}=this.selectNumber
        if (this.props.count % 2 !== 0){
            this.props.increment(value)
        }
    }
    incrementAsync =()=>{
        const {value}=this.selectNumber
        this.props.incrementAsync(value,5000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为   {this.props.count} 下方组件人数为{this.props.total_person}</h1>
                <select ref={(c)=>{this.selectNumber=c}}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementOdd}>当前为奇数加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default Count;