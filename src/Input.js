import React, { Component } from 'react';


// Inputコンポーネントの作成
class Input extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(){
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value='';
  }

  render() {
    return (
      <div>
          <input type="text" ref="newText"/>
          <button onClick={this.addTodo}>追加</button>
      </div>
    )
  }
};

export default Input;