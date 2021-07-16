import React, { useCallback } from 'react';
import { BiKey } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

import { TodoHeader } from './style';

const Header = () => {
  const router = useRouter();

  const onClickLogin = useCallback(()=> {
    router.push('/login')
  }, [])

  const onClickBack = useCallback(()=> {
    router.back();
  }, [])

  return (
    <TodoHeader> 
      { ((router.pathname === "/todos/add") || (router.pathname === "/todos/[id]/modify") || (router.pathname === "/todos/[id]")) &&
        <button onClick={onClickBack}>
          <IoIosArrowBack />
        </button>
      }
      
      <h1>TODO APP</h1>
      <span>
        <BiKey onClick={onClickLogin}/>
      </span>
    </TodoHeader>
  )
}

export default Header
