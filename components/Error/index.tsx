import React, { useCallback } from 'react';
import Link from 'next/link';

import { ErrorWrap } from './style';

const Error = () => {
  const onClickHome = useCallback(() => {
    
  },[])

  return (
    <ErrorWrap>
      {/* <span>에러가 발생했어요!</span>
      <button onClick={onClickHome}>홈으로 돌아가기</button> */}
      <Link href="/">다시 시도</Link>
    </ErrorWrap>
  )
}

export default Error
