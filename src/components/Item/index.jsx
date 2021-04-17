import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        flag: true
    }
    //传入flag判断鼠标是移入还是移出
    over = (flag) => {
        return () => {
            this.setState({flag})    
        }
    }
    //删除某一事项
    delItem= (id,done) => {
        if(window.confirm('确定吗')) {
            this.props.delTodo(id,done)
        }
    }
    //更改勾选状态
    changeCheck = (id,e) => {
        console.log(id,e.target.checked);
        this.props.changeCheck(id,e.target.checked)
    }
    render() {
        let { name, done , id} = this.props
        let { flag } = this.state
        return ( 
            <li onMouseOver={this.over(false)} onMouseOut={this.over(true)} style={{ backgroundColor: flag ? 'white' : 'skyblue' }}>
                <input type="checkbox" checked={done} onChange={(event) => this.changeCheck(id,event)} /> {name}
                <button onClick={() => this.delItem(id,done)} className='delItem' style={{ display: flag ? 'none' : '' }}>删除</button>
            </li>
        )
    }
}
