import React from 'react';

import { HomeWrap } from './style';

import AppLayout from '../AppLayout';
import Header from '../../components/Header';

interface HomeLayoutProps {
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