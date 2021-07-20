import React, { useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { AddWrap } from './style';

import HomeLayout from '../../../layouts/HomeLayout';
import useInput from '../../../hooks/useInput';
import { API_TODOS } from '../../../utils/api';
import { RootState } from '../../../store';

const Add = () => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { detailPost } = useSelector((state: RootState) => state.post);
  const [content, onChangeContent, setContent] = useInput("");

  useEffect(()=> {
    console.log(router.pathname)
    if(router.pathname !== '/todos/add') {
      setContent(detailPost.content);
    }
  }, [])

  const onClickWrite = useCallback((e)=> {
    e.preventDefault();

    if(router.pathname === '/todos/add') {
      axios.post(API_TODOS, {content: content}, {
        headers: {
          'x-auth-token': user.token
        }
      })
      .then((res)=> {
        console.log(res);
        router.back();
      })
      .catch((err)=> {
        console.log(err);
      })
    } else {
      axios.put(`${API_TODOS}/${detailPost.id}`, {content: content}, {
        data: {
          id: detailPost.id
        },
        headers: {
          'x-auth-token': user.token
        }
      })
      .then((res)=> {
        console.log(res);
        router.back();
      })
      .catch((err)=> {
        console.log(err);
      })
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
