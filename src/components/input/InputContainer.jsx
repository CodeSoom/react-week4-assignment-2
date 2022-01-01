import { useDispatch, useSelector } from 'react-redux';
import InputView from './InputView';
import {
  addRestaurant, updateAddress, updateCategory, updateName,
} from '../../reducer/action/actions';

export default function InputContainer() {
  const { name, category, address } = useSelector((store) => store);
  const dispatch = useDispatch();

  function handleChangeName({ target: { value } }) {
    dispatch(updateName(value));
  }

  function handleChangeCategory({ target: { value } }) {
    dispatch(updateCategory(value));
  }

  function handleChangeAddress({ target: { value } }) {
    dispatch(updateAddress(value));
  }

  function handleClickAdd() {
    dispatch(addRestaurant());
  }

  return (
    <InputView
      name={name}
      category={category}
      address={address}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onClickAdd={handleClickAdd}
    />
  );
}
