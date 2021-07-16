import React from 'react';

import AppLayout from '../layouts/AppLayout';
import TodoLists from '../components/TodoLists';
import CreateButton from '../components/CreateButton';
import HomeLayout from '../layouts/HomeLayout';

const Home = () => {
  return (
    <AppLayout>
      <HomeLayout>
        <CreateButton />
        <TodoLists />
      </HomeLayout>
    </AppLayout>
  )
}

export default Home
