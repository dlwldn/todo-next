import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoLists from '../components/TodoLists';
import CreateButton from '../components/CreateButton';
import HomeLayout from '../layouts/HomeLayout';

import { RootState } from '../store';
import { getPostThunk } from '../store/api/thunk';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { loginActionSuccess } from '../store/modules/user';

const Home = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state: RootState) => state.post);
  const { user } = useSelector((state: RootState) => state.user);
  
  useEffect(()=> {
    // const loginToken = window.localStorage.getItem("login");
  
    // if(loginToken && !user.isLogin) {
    //   dispatch(loginActionSuccess(JSON.parse(loginToken)));
    // }

    dispatch(getPostThunk());
  }, [])

  if(loading) return <HomeLayout><Loading /></HomeLayout>
  if(error) return <HomeLayout><Error /></HomeLayout>

  return (
    <HomeLayout>
      <CreateButton />
      <TodoLists list={post.items} />
    </HomeLayout>
  )
}

export default Home
