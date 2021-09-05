import { useDispatch, useSelector } from 'react-redux';

import {
  updateRestaurant, addRestaurant,
} from '../store/actions';

import Form from './Form';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleChangeRestaurant({ name, value }) {
    dispatch(updateRestaurant(name, value));
  }
  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Form
      restaurant={restaurant}
      onChange={handleChangeRestaurant}
      onClick={handleClickAddRestaurant}
    />
  );
}
