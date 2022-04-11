import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurant,
} from './actions';

function selector(state) {
  return {
    name: state.name,
    category: state.category,
    address: state.address,
  };
}

export default function InputContainer() {
  const { name, category, address } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChangeName(restaurantName) {
    dispatch(updateName({ name: restaurantName }));
  }

  function handleChangeCategory(restaurantCategory) {
    dispatch(updateCategory({ category: restaurantCategory }));
  }

  function handleChangeAddress(restaurantAddress) {
    dispatch(updateAddress({ address: restaurantAddress }));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      value={{ name, category, address }}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClick={handleClickAddRestaurant}
    />
  );
}
