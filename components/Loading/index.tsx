import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { LoadingWrap } from './style';

const Loading = () => {
  return (
    <LoadingWrap>
      <CircularProgress color="primary"/>
    </LoadingWrap>
  )
}

export default Loading
