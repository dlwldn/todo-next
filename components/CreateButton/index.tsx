import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { CreateButtonWrap } from './style';

import { RootState } from '../../store';

const CreateButton = () => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);

  const onClickButton = useCallback(() => {
    router.push('/todos/add');
  }, [])

  return (
    <>
      {user.isLogin &&
        <CreateButtonWrap onClick={onClickButton}>
          ADD NEW TODO
        </CreateButtonWrap>
      }
    </>
  )
}

export default CreateButton
