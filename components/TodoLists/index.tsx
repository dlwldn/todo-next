import React from 'react';

import { TodoListsWrap } from './style';

import TodoList from '../TodoList';

const testArray = [
  {id: 1, content: "dfdf"},
  {id: 2, content: "dfdf"},
  {id: 3, content: "dfdf"},
  {id: 4, content: "dfdf"},
  {id: 5, content: "dfdf"},
]

const TodoLists = () => {
  return (
    <TodoListsWrap>
      {testArray.map((item, index)=> {
        return (
          <TodoList key={item.id + index} listItem={item}/>
        )
      })}
    </TodoListsWrap>
  )
}

export default TodoLists
