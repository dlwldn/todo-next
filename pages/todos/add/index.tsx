import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { AddWrap } from './style';

import HomeLayout from '../../../layouts/HomeLayout';
import useInput from '../../../hooks/useInput';
import { RootState } from '../../../store';
import { postModifyThunk, postWriteThunk } from '../../../store/api/thunk';

const Add = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { detailPost } = useSelector((state: RootState) => state.post);
  const [content, onChangeContent, setContent] = useInput("");

  useEffect(()=> {
    if(router.pathname !== '/todos/add') {
      setContent(detailPost.content);
    }
  }, [router, detailPost])

  const onClickWrite = useCallback((e)=> {
    e.preventDefault();

    if(router.pathname === '/todos/add') {
      dispatch(postWriteThunk(content));
    } else {
      dispatch(postModifyThunk(content));
    }
  }, [])

  return (
    <HomeLayout>
      <AddWrap>
        <input type="text" placeholder="Anything you wanna do..." value={content} onChange={onChangeContent}/>
        <button onClick={onClickWrite}>SUBMIT</button>
      </AddWrap>
    </HomeLayout>
  )
}

export default Add
