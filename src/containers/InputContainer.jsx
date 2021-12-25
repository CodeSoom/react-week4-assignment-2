import { useSelector, useDispatch } from 'react-redux';

import Input from '../Input';
import { updateRestaurant, addRestaurant } from '../actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const handleChangeRestaurant = (e) => {
    dispatch(
      updateRestaurant(e.target.name, e.target.value),
    );
  };

  const handleClickAddButton = () => {
    dispatch(
      addRestaurant(restaurant),
    );
  };

  return (
    <Input
      restaurant={restaurant}
      onChange={handleChangeRestaurant}
      onClick={handleClickAddButton}
    />
  );
}
