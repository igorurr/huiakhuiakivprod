import React from 'react'

import { InputItem } from './'
import {createSelectorItem} from "../index";

const AnotherItem = ({ keyItem, value, onRemove }) =>
  createSelectorItem( keyItem, value, ( change, remove ) => {
    const remove2 = () => {
      remove();
      onRemove();
    };
    return (
      <InputItem
        keyItem={keyItem}
        value={value}
        change={change}
        remove={remove2}
        onRemove={onRemove}
        removable
      />
    );
  });

export default AnotherItem;