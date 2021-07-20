import React from 'react';

import { TodoListsWrap } from './style';

import TodoList from '../TodoList';
import { IPostObject } from '../../typings/db';

interface Props {
  list: IPostObject[]
}

const TodoLists = ({ list }: Props) => {
  return (
    <TodoListsWrap>
      {list?.map((item: IPostObject, index: number)=> {
        return (
          <TodoList key={item.id + index} listItem={item}/>
        )
      })}
    </TodoListsWrap>
  )
}

export default TodoLists
