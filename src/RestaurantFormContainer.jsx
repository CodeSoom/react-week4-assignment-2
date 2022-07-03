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

  const handleChangeName = (name) => dispatch(updateRestaurantName(name));

  const handleChangeType = (type) => dispatch(updateRestaurantType(type));

  const handleChangeAddress = (address) => dispatch(updateRestaurantAddress(address));

  const handleSubmit = () => dispatch(addRestaurant(Date.now()));

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
