import { useDispatch, useSelector } from 'react-redux';

import {
  updateAddress,
  updateCategory,
  updateName,
  updateReservation,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { listName, listCategory, listAddress } = useSelector((state) => ({
    listName: state.listName,
    listCategory: state.listCategory,
    listAddress: state.listAddress,
  }));

  function handleChangeInput({ target: { name, value } }) {
    if (name === 'name') {
      dispatch(updateName(value));
    }
    if (name === 'category') {
      dispatch(updateCategory(value));
    }
    if (name === 'address') {
      dispatch(updateAddress(value));
    }
  }

  function makeReservation() {
    dispatch(updateReservation());
  }

  return (
    <>
      <Input
        label="name"
        value={listName}
        name="name"
        onChange={handleChangeInput}
      />
      <Input
        label="menu"
        value={listCategory}
        name="category"
        onChange={handleChangeInput}
      />
      <Input
        label="address"
        value={listAddress}
        name="address"
        onChange={handleChangeInput}
      />
      <button type="button" onClick={makeReservation}>등록</button>
    </>
  );
}
