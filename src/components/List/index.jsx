import React, { Component } from 'react'
import Item from '../Item/index'

export default class List extends Component {
    render() {
        let {todos ,delTodo,changeCheck} = this.props
        return (
            <ul>
                {todos.map((item,index) => {
                    return <Item delTodo={delTodo} key={item.id} index={index} {...item} changeCheck={changeCheck}/>
                })}
            </ul>
        )
    }
}
