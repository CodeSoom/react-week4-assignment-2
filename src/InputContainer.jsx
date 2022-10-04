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

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeCategory(event) {
    dispatch(updateCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
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
        handleChange={handleChangeName}
      />
      <Input
        label="menu"
        value={listCategory}
        name="category"
        handleChange={handleChangeCategory}
      />
      <Input
        label="address"
        value={listAddress}
        name="address"
        handleChange={handleChangeAddress}
      />
      <button type="button" onClick={makeReservation}>등록</button>
    </>
  );
}
