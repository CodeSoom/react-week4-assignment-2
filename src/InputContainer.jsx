import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant, updateRestaurant } from './actions';
import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleChange(event) {
    const { target: { name, value } } = event;
    dispatch(updateRestaurant({ name, value }));
  }

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <Input
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
