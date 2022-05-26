import { useDispatch, useSelector } from 'react-redux';

import Input from '../components/Input';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddress,
  addRestaurant,
} from '../actions';

export default function InputContainer() {
  const { restaurantName, restaurantCategory, restaurantAddress } = useSelector(
    (state) => ({
      restaurantName: state.restaurantName,
      restaurantCategory: state.restaurantCategory,
      restaurantAddress: state.restaurantAddress,
    })
  );
  const dispatch = useDispatch();

  const handleChangeRestaurantName = (event) =>
    dispatch(updateRestaurantName(event.target.value));

  const handleChangeRestaurantCategory = (event) =>
    dispatch(updateRestaurantCategory(event.target.value));

  const handleChangeRestaurantAddress = (event) =>
    dispatch(updateRestaurantAddress(event.target.value));

  const handleClickAddRestaurant = () => dispatch(addRestaurant());

  return (
    <Input
      nameValue={restaurantName}
      categoryValue={restaurantCategory}
      addressValue={restaurantAddress}
      onChangeRestaurantName={handleChangeRestaurantName}
      onChangeRestaurantCategory={handleChangeRestaurantCategory}
      onChangeRestaurantAddress={handleChangeRestaurantAddress}
      onClickAddRestaurant={handleClickAddRestaurant}
    />
  );
}
