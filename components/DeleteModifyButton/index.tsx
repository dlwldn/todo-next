import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { ButtonsWrap, DeleteButton, ModifyButton } from './style';

import { RootState } from '../../store';
import { API_POST_CONTENT } from '../../utils/api';

const DeleteModifyButton = () => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.user);
  const { detailPost } = useSelector((state: RootState) => state.post);

  const onClickDelete = useCallback(() => {
    axios.delete(`${API_POST_CONTENT}/${detailPost.id}`, {
      data: {
        id: detailPost.id
      },
      headers: {  
        'x-auth-token': user.token
      }
    })
    .then((res)=> {
      console.log(res)
      router.back();
    })
    .catch((err)=> {
      console.log(err)
    })
  }, [user, detailPost, router])

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
