import { useDispatch } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import {
  createRestaurant,
} from './actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  return (
    <RestaurantForm
      onClick={() => dispatch(createRestaurant())}
    />
  );
}
