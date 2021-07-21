import React, { MutableRefObject, useRef, useCallback } from 'react';

import { TodoListsWrap } from './style';

import TodoList from '../TodoList';
import { IPostObject } from '../../typings/db';
import { useDispatch, useSelector } from 'react-redux';
import { getPostScrollThunk } from '../../store/api/thunk';
import { RootState } from '../../store';

interface Props {
  list: IPostObject[];
}

const TodoLists = ({ list }: Props) => {
  const dispatch = useDispatch();
  const listRef = useRef<HTMLUListElement>(null) as MutableRefObject<HTMLUListElement>;
  const { currPage } = useSelector((state: RootState) => state.post);
  const { post, scrollLoading } = useSelector((state: RootState) => state.post);
  
  const scrollEvent = useCallback(()=> {
    if((listRef.current.scrollHeight - listRef.current.scrollTop === listRef.current.offsetHeight) && (currPage < post.numberOfPages) && !scrollLoading) {
      dispatch(getPostScrollThunk());
    }
  }, [currPage, post, scrollLoading])
  
  return (
    <TodoListsWrap ref={listRef} onScroll={scrollEvent}>
      {list?.map((item: IPostObject, index: number)=> {
        return (
          <TodoList key={item.id + index} listItem={item}/>
        )
      })}
    </TodoListsWrap>
  )
};

export default TodoLists
