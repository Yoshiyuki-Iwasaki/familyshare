import React, { Component } from 'react';
import List from './List';
import Input from './Input';
import styled from 'styled-components';

const titleStyle = { margin: '0' ,color: '#333', fontSize: 30 };
const ReactApp = styled.div`
  text-align: center;
  width: 350px;
  margin: 50px auto 0;
`;

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
      <ReactApp>
        <h1 style={titleStyle}>FamilyShare</h1>
        <Input addTodo={this.addTodo} />
        <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
      </ReactApp>
    );
  }
}
  
export default App;