import { useDispatch } from 'react-redux';
import RestaurantForm from './RestaurantForm';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  return (
    <RestaurantForm
      onClick={dispatch}
    />
  );
}
