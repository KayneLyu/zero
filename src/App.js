import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  state= {
    todos:[
      {id:1,name:'学习',done:true},
      {id:2,name:'吃饭',done:false},
      {id:3,name:'写代码',done:false},
      {id:4,name:'11223',done:false}
    ],
    isDone:0,
    // checkAll:false
  }
  //添加代办事项
  addTodo = (todo) => {
    this.setState({todos:[todo,...this.state.todos]})
  }
  //删除某项代办事项
  delTodo = (id,done) => {
    let {todos,isDone} = this.state
    //过滤
    let newTodos= todos.filter(item => {
       return item.id !== id
    })    
    if(done) {
      isDone--
      return this.setState({todos:newTodos,isDone})
    }
    this.setState({todos:newTodos})
    // this.checkNum(todos)
  }
  //更改选中状态
  changeCheck = (id,done) => {
    
    let {todos,isDone} = this.state
    let newTodo = todos.map( item => {
      if(item.id === id) return {...item,done}
      else return item
    })
    if (done) {
      isDone++
      // checkAll = isDone === todos.length
      return this.setState({todos:newTodo,isDone})
    } else {
      isDone--
      // checkAll = false
      return this.setState({todos:newTodo,isDone})
    }
    // this.checkNum(newTodo)
  }

  //删除所有事项
  deleteAll = () => {
    let {todos} = this.state
    let newTodo = todos.filter( item => {
      return item.done !==true
    })
    this.setState({todos:newTodo,isDone:0})
  }
  
  //全部勾选 
  checkAll = (flag) => {
    let {todos,isDone,checkAll} =this.state
    let newTodo = todos.map( item => {
        return {...item,done:flag}
    })
    if(flag) {
    isDone = newTodo.length
    // checkAll = true
    } else {
      isDone = 0
      // checkAll= false
    } 
    this.setState({todos:newTodo,isDone,checkAll})
    // this.checkNum(newTodo)
  }
  //钩子函数初次挂载展示已勾选
  componentDidMount () {
    this.setState({isDone:1})
    // this.checkNum(todos)
  }
  //勾选的数量
  // checkNum =(todos)=>{
  //   let isDone = todos.filter(item => {
  //     return item.done === true
  //   })
  //   console.log(isDone)
  //   this.setState({isDone:isDone.length})
  // }
  render() {
    let {todos,isDone} = this.state
    return (
      <div className = 'App'>
        <Header addTodo={this.addTodo}></Header>
        <List todos={todos} delTodo={this.delTodo} changeCheck={this.changeCheck}/>
        <Footer num={todos.length} isDone ={isDone} deleteAll={this.deleteAll}  checkAll={this.checkAll} />
      </div>
    );
  }
}

export default App;
