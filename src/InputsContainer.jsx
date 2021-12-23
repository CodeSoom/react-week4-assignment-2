import { useSelector, useDispatch } from 'react-redux';

import { updateRestaurantInfo, addRestaurant } from './actions';

import Input from './Input';

export default function InputsContainer() {
  const { restautrant } = useSelector((state) => ({
    restautrant: state.restautrant,
  }));
  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    dispatch(updateRestaurantInfo(key, value));
  };

  const handleClick = () => {
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
