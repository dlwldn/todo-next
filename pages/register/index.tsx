import React, { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { RegisterWrap, RegisterContentWrap, InputWrap } from './style';

import AppLayout from '../../layouts/AppLayout';
import useInput from '../../hooks/useInput';
import { setRegisterThunk } from '../../store/api/thunk';
import { RootState } from '../../store';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { registerInit } from '../../store/modules/user';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isRegister, loading, error } = useSelector((state: RootState) => state.user);

  const [username, onChangeUsername] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [isCollectUsername, setIsCollectUsername] = useState(false);
  const [isCollectPassword, setIsCollectPassword] = useState(false);
  const [isCollectPasswordCheck, setIsCollectPasswordCheck] = useState(false);

  useEffect(()=> {
    dispatch(registerInit());
  }, [isRegister])

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
      dispatch(setRegisterThunk(username, password));
    }
  }, [username, password, passwordCheck])

  if(loading) return <AppLayout><Loading /></AppLayout>
  if(error) return <AppLayout><Error /></AppLayout>
  if(isRegister) {
    router.push('/login');
    return <div></div>
  }
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
