import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
       { title: 'テキストが入ります01' } ,
       { title: 'テキストが入ります02' } ,
       { title: 'テキストが入ります03' } ,
       { title: 'テキストが入ります04' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  // 新規追加
  addTodo(value) {
    // 追加
    this.state.todo.push({
      title: value
    });
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
 
  // 削除機能
  deleteTodo(i) {
    // 削除
    this.state.todo.splice(i, 1);
    // 保存
    this.setState({
      todo : this.state.todo
    });
  }
 
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
        <Input addTodo={this.addTodo} />
      </div>
    );
  }
}
  
export default App;