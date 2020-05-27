import React, { Component } from 'react';
  
// Listコンポーネントの作成
function List(props){  
  return (
    <ul>
      {props.todo.map( (todo, i) => {
        return <li key={i}> <input type="button" value="☓"
        onClick={() => props.deleteTodo(i)}/> {todo.title}</li>
      })}
    </ul>
  )
};

export default List;