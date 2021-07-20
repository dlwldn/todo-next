import React, { useEffect } from 'react';

import { AddWrap } from './style';
import useInput from '../../hooks/useInput';

interface Props {
  contentData: string
}

const WriteModifyForm = ({ contentData }: Props) => {
  const [content, onChangeContent, setContent] = useInput("");

  useEffect(()=> {
    setContent(contentData)
  })

  return (
    <AddWrap>
      <input type="text" placeholder="Anything you wanna do..." value={content} onChange={onChangeContent}/>
      {/* <button onClick={onClickWrite}>SUBMIT</button> */}
    </AddWrap>
  )
}

export default WriteModifyForm
