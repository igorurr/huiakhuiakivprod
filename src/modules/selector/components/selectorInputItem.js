import React, { Component } from 'react'

import { InputItem } from './'
import 'bootstrap/dist/css/bootstrap.css';
import {createSelectorItem} from "../index";

export default ({ textBefore, textAfter, keyItem, value, removable }) =>
  createSelectorItem( keyItem, value, ( change, remove ) => (
    <InputItem
      textBefore={textBefore}
      textAfter={textAfter}
      keyItem={keyItem}
      value={value}
      removable={removable}
      change={change}
      remove={remove}
    />
  ) );