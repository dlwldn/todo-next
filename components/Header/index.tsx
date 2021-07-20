import React, { useCallback, useState } from 'react';
import { BiKey, BiLock } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';

import { TodoHeader } from './style';

import { RootState } from '../../store';
import { setLogout } from '../../store/modules/user';

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const onClickLogin = useCallback(()=> {
    router.push('/login')
  }, [])

  const onClickLogout = useCallback(()=> {
    dispatch(setLogout());
  }, [])

  const onClickBack = useCallback(()=> {
    router.back();
  }, [])

  return (
    <TodoHeader> 
      {((router.pathname === "/todos/add") || (router.pathname === "/todos/[id]/modify") || (router.pathname === "/todos/[id]")) &&
        <button onClick={onClickBack}>
          <IoIosArrowBack />
        </button>
      }
      
      <h1>TODO APP</h1>
      {router.pathname === "/" &&
        <span>
          {user.isLogin ? <BiLock onClick={onClickLogout}/> : <BiKey onClick={onClickLogin}/>}
        </span>
      }
    </TodoHeader>
  )
}

export default Header
