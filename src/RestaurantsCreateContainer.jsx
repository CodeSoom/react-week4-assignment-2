import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant } from './actions';

import RestaurantsForm from './RestaurantsForm';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantsForm
      restaurant={restaurant}
      onClick={handleClick}
    />
  );
}
