import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { TodoListWrap } from './style';

import { IPostObject } from '../../typings/db';
import dayjs from 'dayjs';

interface Props {
  listItem: IPostObject;
}

const TodoList = ({ listItem }: Props) => {
  const router = useRouter();
  const date = dayjs(listItem.createdAt);

  const onClickList = useCallback(() => {
    if(router.pathname === "/") {
      router.push(`/todos/[id]`, `/todos/${listItem.id}`)
    }
  }, [router])

  return (
    <TodoListWrap onClick={onClickList}>
      {/* <Link href={`/todos/[id]`} as={`/todos/${listItem.id}`}> */}
        <span>{date.format("YYYY-MM-DD HH:mm")}</span>
        <p>{listItem.content}</p>
      {/* </Link>   */}
    </TodoListWrap>
  )
}

export default TodoList
