import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateName,
  updateType,
  updateAddress,
  setRestaurants,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const { shopName, shopType, shopAddress } = useSelector((state) => ({
    shopName: state.shopName,
    shopType: state.shopType,
    shopAddress: state.shopAddress,
  }));

  const dispatch = useDispatch();

  function handleChangeName(e) {
    dispatch(updateName(e.target.value));
  }

  function handleChangeType(e) {
    dispatch(updateType(e.target.value));
  }

  function handleChangeAddress(e) {
    dispatch(updateAddress(e.target.value));
  }

  function handleClickSetList() {
    dispatch(setRestaurants());
  }

  return (
    <Input
      shopName={shopName}
      shopType={shopType}
      shopAddress={shopAddress}
      onChangeName={handleChangeName}
      onChangeType={handleChangeType}
      onChangeAddress={handleChangeAddress}
      onClickSetList={handleClickSetList}
    />
  );
}
