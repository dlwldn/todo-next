import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { CreateButtonWrap } from './style';

const CreateButton = () => {
  const router = useRouter();

  const onClickButton = useCallback(() => {
    router.push('/todos/add');
  }, [])

  return (
    <CreateButtonWrap onClick={onClickButton}>
      ADD NEW TODO
    </CreateButtonWrap>
  )
}

export default CreateButton
