import React from 'react';

import { AddWrap } from './style';
import useInput from '../../hooks/useInput';

const WriteModifyForm = () => {
  const [content, onChangeContent, setContent] = useInput("");

  return (
    <AddWrap>
      <input type="text" placeholder="Anything you wanna do..." value={content} onChange={onChangeContent}/>
      {/* <button onClick={onClickWrite}>SUBMIT</button> */}
    </AddWrap>
  )
}

export default WriteModifyForm
