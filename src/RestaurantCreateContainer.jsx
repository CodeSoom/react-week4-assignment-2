import { useDispatch } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import {
  addRestaurant,
} from './actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm
      onClick={handleClick}
    />
  );
}
