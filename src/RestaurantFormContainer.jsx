import { useDispatch, useSelector } from 'react-redux';

import {
  addRestaurant,
  updateRestaurantAddress,
  updateRestaurantName,
  updateRestaurantType,
} from './actions';

import RestaurantForm from './RestaurantForm';

const RestaurantFormContainer = () => {
  const dispatch = useDispatch();

  const restaurant = useSelector((state) => state.restaurant);

  const handleChangeName = (event) => dispatch(updateRestaurantName(event.target.value));

  const handleChangeType = (event) => dispatch(updateRestaurantType(event.target.value));

  const handleChangeAddress = (event) => dispatch(updateRestaurantAddress(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRestaurant());
  };

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChangeName={handleChangeName}
      onChangeType={handleChangeType}
      onChangeAddress={handleChangeAddress}
      onSubmit={handleSubmit}
    />
  );
};

export default RestaurantFormContainer;
