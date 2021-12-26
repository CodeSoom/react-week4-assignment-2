import { useDispatch } from 'react-redux';
import RestaurantView from './RestaurantView';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(() => event.target.value);
  }

  function handleChangeCategory(event) {
    dispatch(() => event.target.value);
  }

  return (
    <RestaurantView
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
    />
  );
}
