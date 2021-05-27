import { useDispatch, useSelector } from 'react-redux';

import { addNewRestaurant } from '../redux/actions';
import useRestaurantField from './useRestaurantField';

export default function useRestaurants() {
  const dispatch = useDispatch();
  const { newRestaurant } = useRestaurantField();

  const restaurants = useSelector((state) => state.restaurants);
  const addNewToRestaurants = () => dispatch(addNewRestaurant(newRestaurant));

  return { restaurants, addNewToRestaurants };
}
