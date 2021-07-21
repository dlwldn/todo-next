import React, { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

import { TodoListWrap } from './style';

import { IPostObject } from '../../typings/db';


interface Props {
  listItem: IPostObject;
}

const TodoList = ({ listItem }: Props) => {
  const router = useRouter();
  const date = dayjs(listItem.createdAt);

  const [isHome, setIsHome] = useState(false);

  useEffect(()=> {
    if(router.pathname === '/') {
      setIsHome(true);
    }
  }, [router])

  const onClickList = useCallback(() => {
    if(router.pathname === "/") {
      router.push(`/todos/[id]`, `/todos/${listItem.id}`)
    }
  }, [router])

  return (
    <TodoListWrap onClick={onClickList} isHome={isHome}>
      <span>{date.format("YYYY-MM-DD HH:mm")}</span>
      <p>{listItem.content}</p>
    </TodoListWrap>
  )
}

export default TodoList
