import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurantInfo, addRestaurant } from './actions';

import Input from './Input';

export default function InputsContainer() {
  const { restautrant } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    dispatch(updateRestaurantInfo(key, value));
  };

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(addRestaurant());
  };

  return (
    <Input
      restautrant={restautrant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
