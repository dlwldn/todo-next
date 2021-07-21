import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import router from 'next/router';

import { AddWrap } from './style';

import useInput from '../../hooks/useInput';
import { postWriteThunk, postModifyThunk } from '../../store/api/thunk';
import { RootState } from '../../store';

const WriteModifyForm = () => {
  const dispatch = useDispatch();
  const { detailPost } = useSelector((state: RootState) => state.post);
  const [content, onChangeContent, setContent] = useInput("");

  useEffect(()=> {
    setContent(detailPost.content);
  }, [router, detailPost])

  const onClickWrite = useCallback((e)=> {
    e.preventDefault();

    if(router.pathname === '/todos/add') {
      dispatch(postWriteThunk(content));
    } else {
      dispatch(postModifyThunk(content));
    }
  }, [router, content])

  return (
    <AddWrap>
      <input type="text" placeholder="Anything you wanna do..." value={content} onChange={onChangeContent}/>
      <button onClick={onClickWrite}>SUBMIT</button>
    </AddWrap>
  )
}

export default WriteModifyForm
