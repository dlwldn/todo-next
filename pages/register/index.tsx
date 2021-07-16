import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import { RegisterWrap, RegisterContentWrap, InputWrap } from './style';

import AppLayout from '../../layouts/AppLayout';
import useInput from '../../hooks/useInput';

const Register = () => {
  const router = useRouter();

  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [isCollectUsername, setIsCollectUsername] = useState(false);
  const [isCollectPassword, setIsCollectPassword] = useState(false);
  const [isCollectPasswordCheck, setIsCollectPasswordCheck] = useState(false);

  const onClickRegister = useCallback((e)=> {
    e.preventDefault();
    if(username.length === 0) {
      setIsCollectUsername(true);
    }
    if(password.length < 4) {
      setIsCollectPassword(true);
    }
    if(passwordCheck === "" || (passwordCheck !== password)) {
      setIsCollectPasswordCheck(true);
    }

    if(username.length > 0 && password.length >= 4 && (passwordCheck === password)) {
      axios.post('http://localhost:9090/auth/register', {username: username, password: password})
      .then((res)=> {
        console.log(res);
        if(res.data.success) {
          router.push('/login')
        }
      })
      .catch((err)=> {
        console.log(err);
      }) 
    }
  }, [username, password, passwordCheck])

  return (
    <AppLayout>
      <RegisterWrap>
        <h1>TODO APP</h1>
        <RegisterContentWrap>
          <InputWrap>
            <input type="text" placeholder="닉네임" value={username} onChange={onChangeUsername}/>
            {isCollectUsername && username.length === 0 && <span>닉네임을 입력해주세요</span>}
          </InputWrap>
          <InputWrap>
            <input type="password" placeholder="비밀번호" value={password} onChange={onChangePassword}/>
            {isCollectPassword && password.length < 4 && <span>비밀번호는 최소 4글자입니다.</span>}
          </InputWrap>
          <InputWrap>
            <input type="password" placeholder="비밀번호 확인" value={passwordCheck} onChange={onChangePasswordCheck}/>
            {isCollectPasswordCheck && (passwordCheck === "" || (passwordCheck !== password)) && <span>비밀번호와 일치하지 않습니다.</span>}
          </InputWrap>
          

          <button onClick={onClickRegister}>
            REGISTER
          </button>
        </RegisterContentWrap>

        <span>
          <Link href="/login">
            Login
          </Link>
        </span>
      </RegisterWrap>
    </AppLayout>
  )
}

export default Register
