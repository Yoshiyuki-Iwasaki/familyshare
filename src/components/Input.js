import React, { Component } from 'react';
import styled from 'styled-components';

const newText = {color: "#333",fontSize:"15px",marginTop: "50px",padding: "20px" ,border: "2px solid palevioletred", borderRadius: '5px'};
const newText_button =  {color: "#fff",fontSize:"15px",marginTop: "20px", marginLeft: "15px",padding: "5px 20px" ,border: "2px solid palevioletred",borderRadius: '5px',background: "palevioletred"};
const ReactInputApp = styled.div`

`;


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
      <ReactInputApp>
          <input style={newText} type="text" ref="newText"/>
          <button style={newText_button} onClick={this.addTodo}>追加</button>
      </ReactInputApp>
    )
  }
};

export default Input;