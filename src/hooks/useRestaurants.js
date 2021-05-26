import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant } from '../redux/actions';

export default function useRestaurants() {
  const dispatch = useDispatch();
  const { restaurants, ...infos } = useSelector((state) => state);
  const addNewToRestaurants = () => dispatch(addRestaurant(infos));

  return { restaurants, addNewToRestaurants };
}
