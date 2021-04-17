import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    add = (event) => {
        let {keyCode,target} = event 
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            return alert('内容不能为空')
        }      
        //生成唯一id  
        const id = nanoid()
        // console.log(id)
        const obj = {id,name:target.value,done:false}
        //新增的事项通过参数（对象）传递给APP 触发对应处理事件
        this.props.addTodo(obj)
        // 清空输入框
        target.value=''
    }
    render() {
        return (
            <div className='header'>
                <input type="text" placeholder='请输入待处理事项,输入 enter 确认' onKeyUp={this.add}/>
            </div>
        )
    }
}
