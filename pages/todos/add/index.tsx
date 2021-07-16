import React from 'react';
import HomeLayout from '../../../layouts/HomeLayout';

import { AddWrap } from './style';

const Add = () => {
  return (
    <HomeLayout>
      <AddWrap>
        <input type="text" placeholder="Anything you wanna do..."/>
        <button>SUBMIT</button>
      </AddWrap>
    </HomeLayout>
  )
}

export default Add
