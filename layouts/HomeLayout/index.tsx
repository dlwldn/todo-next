import React from 'react';
import Header from '../../components/Header';

import { HomeWrap } from './style';

import AppLayout from '../AppLayout';

type HomeLayoutProps = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <AppLayout>
      <HomeWrap>
        <Header />
        {children}
      </HomeWrap>
    </AppLayout>
  )
}

export default HomeLayout;