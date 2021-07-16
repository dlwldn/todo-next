import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { LoginWrap, LoginContentWrap, InputWrap } from './style';

import AppLayout from '../../layouts/AppLayout';
import useInput from '../../hooks/useInput';

const Login = () => {
  const router = useRouter();

  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [isCollectUsername, setIsCollectUsername] = useState(false);
  const [isCollectPassword, setIsCollectPassword] = useState(false);

  useEffect(()=> {
    axios.get('http://localhost:9090/todos')
    .then((res) => {
      console.log(res)
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [])

  const onClickLogin = useCallback((e)=> {
    e.preventDefault();
    if(username.length === 0) {
      setIsCollectUsername(true);
    }
    if(password.length < 4) {
      setIsCollectPassword(true);
    }

    if(username.length > 0 && password.length >= 4) {
      // router.push('/');
      axios.post('http://localhost:9090/auth/login', {username: username, password: password})
      .then((res)=> {
        console.log(res.data.token);

        if(res.data.token) {
          router.push('/');
        } else {
          window.alert("로그인에 실패하였습니다")
        }
        
      })
      .catch((err)=> {
        
      })
    }
  }, [username, password])

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

export default Login
