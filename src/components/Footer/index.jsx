import React, { Component } from 'react'

export default class Footer extends Component {
    del =() => {
        this.props.deleteAll()
    }
    checkAll =(e)=> {
        let flag = e.target.checked
        this.props.checkAll(flag)
    }
    render() {
        let { num, isDone} = this.props
        return (
            <div>
                <input type="checkbox" onChange={this.checkAll} checked={isDone===num && num !==0 ? true:false}/>
                <span>已完成{isDone}</span><span>/全部{num}</span>
                <button onClick={this.del}>   删除已选择</button>
            </div>
        )
    }
}
