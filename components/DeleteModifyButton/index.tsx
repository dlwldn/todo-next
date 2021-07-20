import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { ButtonsWrap, DeleteButton, ModifyButton } from './style';

import { RootState } from '../../store';
import { postDeleteThunk } from '../../store/api/thunk';

const DeleteModifyButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { detailPost } = useSelector((state: RootState) => state.post);

  const onClickDelete = useCallback(() => {
    dispatch(postDeleteThunk());
  }, [])

  const onClickModify = useCallback(()=> {
    router.push(`/todos/[id]/modify`, `/todos/${detailPost.id}/modify`)
  }, [router, detailPost])

  return (
    <>
      {user.isLogin &&
        <ButtonsWrap>
          <DeleteButton onClick={onClickDelete}>DELETE</DeleteButton>
          <ModifyButton onClick={onClickModify}>MODIFY</ModifyButton>
        </ButtonsWrap>
      }
    </>
  )
}

export default DeleteModifyButton;
