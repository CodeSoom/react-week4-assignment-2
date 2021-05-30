import { useDispatch } from 'react-redux';

import { addRestaurant } from './actions';

import RestaurantsForm from './RestaurantsForm';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    // <InputForm inputData/>
    <RestaurantsForm onClick={handleClick} />
  );
}
