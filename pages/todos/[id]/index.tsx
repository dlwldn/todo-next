import React from 'react';

import { ButtonsWrap, DeleteButton, ModifyButton } from './style';

import HomeLayout from '../../../layouts/HomeLayout';
import TodoList from '../../../components/TodoList';

const Id = () => {
  const item = {id: 1, content: "SDfsf"};

  return (
    <HomeLayout>
      <TodoList listItem={item}/>

      <ButtonsWrap>
        <DeleteButton>DELETE</DeleteButton>
        <ModifyButton>MODIFY</ModifyButton>
      </ButtonsWrap>
    </HomeLayout>
  )
}

export default Id
