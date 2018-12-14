import React from 'react';
import {createSelectorItem} from "../index";

const SelectorTextItem = ({ children, keyItem }) =>
  createSelectorItem( keyItem, '', ( change, remove ) => <p>{ children }</p> );

export default SelectorTextItem;