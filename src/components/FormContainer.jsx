import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import {
  updateName, updateCategory, updateAddress, addRestaurant,
} from '../store/actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((state) => state);

  function handleChangeName({ target: { value } }) {
    dispatch(updateName(value));
  }

  function handleChangeCategory({ target: { value } }) {
    dispatch(updateCategory(value));
  }

  function handleChangeAddress({ target: { value } }) {
    dispatch(updateAddress(value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Form
      name={name}
      category={category}
      address={address}
      handleChangeName={handleChangeName}
      handleChangeCategory={handleChangeCategory}
      handleChangeAddress={handleChangeAddress}
      handleClickAddRestaurant={handleClickAddRestaurant}
    />
  );
}
