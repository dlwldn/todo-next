import React, { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { LoginWrap, LoginContentWrap, InputWrap } from './style';

import AppLayout from '../../layouts/AppLayout';
import useInput from '../../hooks/useInput';
import { setLoginThunk } from '../../store/api/thunk';
import { RootState } from '../../store';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Login = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: RootState) => state.user);

  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isCollectUsername, setIsCollectUsername] = useState(false);
  const [isCollectPassword, setIsCollectPassword] = useState(false);

  useEffect(()=> {
    if(user.isLogin) {
      router.push('/')
    }
  }, [user, router])

  const onClickLogin = useCallback((e)=> {
    e.preventDefault();
    if(username.length === 0) {
      setIsCollectUsername(true);
    }
    if(password.length < 4) {
      setIsCollectPassword(true);
    }

    if(username.length > 0 && password.length >= 4) {
      dispatch(setLoginThunk(username, password));
    }
  }, [username, password])

  if(loading) return <AppLayout><Loading /></AppLayout>
  if(error) return <AppLayout><Error /></AppLayout>
  if(user.isLogin) {
    return null
  } else {
    return (
      <AppLayout>
        <LoginWrap>
          <h1>TODO APP</h1>
          <LoginContentWrap action="">
            <InputWrap>
              <input type="text" placeholder="username" value={username} onChange={onChangeUsername}/>
              {isCollectUsername && username.length === 0 && <span>닉네임을 제대로 입력해주세요</span>}
            </InputWrap>
            <InputWrap>
              <input type="password" placeholder="******" value={password} onChange={onChangePassword}/>
              {isCollectPassword && password.length < 4 && <span>비밀번호는 최소 4글자입니다.</span>}
            </InputWrap>
            
            <button onClick={onClickLogin}>
              LOGIN
            </button>
          </LoginContentWrap>
  
          <span>
            <Link href="/register">
              register
            </Link>
          </span>
        </LoginWrap>
      </AppLayout>
    )
  }
}

export default Login
