import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import HomeLayout from '../../../layouts/HomeLayout';
import TodoList from '../../../components/TodoList';
import { RootState } from '../../../store';
import DeleteModifyButton from '../../../components/DeleteModifyButton';
import { getPostDetailThunk } from '../../../store/api/thunk';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';

const Id = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { detailPost, loading, error } = useSelector((state: RootState) => state.post);

  useEffect(()=> {
    console.log("유즈이펙트")
    dispatch(getPostDetailThunk());
  }, [router])

  if(loading) return <HomeLayout><Loading /></HomeLayout>
  if(error) return <HomeLayout><Error /></HomeLayout>

  return (
    <HomeLayout>
      {console.log("렌더링")}
      <TodoList listItem={detailPost}/>
      <DeleteModifyButton />
    </HomeLayout>
  )
}

export default Id
