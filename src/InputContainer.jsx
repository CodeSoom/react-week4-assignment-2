import { useDispatch, useSelector } from 'react-redux';

import {
  updateListAddress,
  updateListMenu,
  updateListTitle,
  updateReservation,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { listTitle, listMenu, listAddress } = useSelector((state) => ({
    listTitle: state.listTitle,
    listMenu: state.listMenu,
    listAddress: state.listAddress,
  }));

  function handleChangeListTitle(event) {
    dispatch(updateListTitle(event.target.value));
  }

  function handleChangeListMenu(event) {
    dispatch(updateListMenu(event.target.value));
  }

  function handleChangeListAddress(event) {
    dispatch(updateListAddress(event.target.value));
  }

  function makeReservation() {
    dispatch(updateReservation());
  }

  return (
    <>
      <Input
        label="title"
        value={listTitle}
        handleChange={handleChangeListTitle}
      />
      <Input
        label="menu"
        value={listMenu}
        handleChange={handleChangeListMenu}
      />
      <Input
        label="address"
        value={listAddress}
        handleChange={handleChangeListAddress}
      />
      <button type="button" onClick={makeReservation}>등록</button>
    </>
  );
}
