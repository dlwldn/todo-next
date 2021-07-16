import React, { useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { TodoListWrap } from './style';

import { IList } from '../../typings/db';

interface Props {
  listItem: IList
}

const TodoList = ({ listItem }: Props) => {
  const router = useRouter();

  const onClickList = useCallback(() => {
    router.push(`/todos/${listItem.id}`)
  }, [])

  return (
    <TodoListWrap onClick={onClickList}>
      {/* <Link href={`/todos/[id]`} as={`/todos/${listItem.id}`}> */}
        <span>날짜</span>
        <p>{listItem.content}</p>
      {/* </Link>   */}
    </TodoListWrap>
  )
}

export default TodoList
