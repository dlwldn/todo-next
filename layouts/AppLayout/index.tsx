import React from 'react';

import { AppLayoutWrap } from './style';

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ( { children }: AppLayoutProps ) => {
  return (
    <AppLayoutWrap>
      <div>
        {children}
      </div>
    </AppLayoutWrap>
  )
}

export default AppLayout
