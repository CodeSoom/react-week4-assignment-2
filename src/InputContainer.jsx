import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant, updateAddress, updateCategory, updateName,
} from './actions';
import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleNameChange(event) {
    dispatch(updateName(event.target.value));
  }

  function handleAddressChange(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleCategoryChange(event) {
    dispatch(updateCategory(event.target.value));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onNameChange={handleNameChange}
      onAddressChange={handleAddressChange}
      onCategoryChange={handleCategoryChange}
      onClick={handleClick}
    />
  );
}
