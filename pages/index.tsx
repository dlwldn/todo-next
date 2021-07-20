import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../layouts/AppLayout';
import TodoLists from '../components/TodoLists';
import CreateButton from '../components/CreateButton';
import HomeLayout from '../layouts/HomeLayout';

import { RootState } from '../store';
import { getPostThunk } from '../store/api/thunk';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Home = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state: RootState) => state.post);

  useEffect(()=> {
    dispatch(getPostThunk());
  }, [])

  if(loading) return <AppLayout><Loading /></AppLayout>
  if(error) return <AppLayout><Error /></AppLayout>

  return (
    <AppLayout>
      <HomeLayout>
        <CreateButton />
        <TodoLists list={post.items}/>
      </HomeLayout>
    </AppLayout>
  )
}

export default Home
