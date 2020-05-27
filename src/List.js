import React, { Component } from 'react';
import styled from 'styled-components';

const ulStyle = { listStyleType: "none",margin: "0",marginTop: "50px",padding: "0" };
const liStyle = { marginTop: "20px", padding: "30px 20px" ,border: "2px solid palevioletred",borderRadius: '5px'};

// Listコンポーネントの作成
function List(props){  
  return (
    <ul style={ulStyle}>
      {props.todo.map( (todo, i) => {
        return <li style={liStyle} key={i}>{todo.title}<input type="button" value="☓"
        onClick={() => props.deleteTodo(i)}/></li>
      })}
    </ul>
  )
};

export default List;