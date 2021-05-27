import { useDispatch, useSelector } from 'react-redux';

import { updateRestaurantField } from '../redux/actions';

export default function useRestaurantField() {
  const dispatch = useDispatch();
  const newRestaurant = useSelector((state) => state.newRestaurant);

  const setRestaurantField = (field, value) => dispatch(
    updateRestaurantField({ field, value }),
  );

  return { newRestaurant, setRestaurantField };
}
