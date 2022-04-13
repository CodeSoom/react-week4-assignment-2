import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import {
  updateInformation,
  addRestaurant,
} from './actions';

function selector(state) {
  return {
    name: state.name,
    category: state.category,
    address: state.address,
  };
}

export default function FormContainer() {
  const { name, category, address } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChange({ restaurantName, restaurantCategory, restaurantAddress }) {
    dispatch(updateInformation({
      name: restaurantName,
      category: restaurantCategory,
      address: restaurantAddress,
    }));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Form
      value={{ name, category, address }}
      onChange={handleChange}
      onClick={handleClickAddRestaurant}
    />
  );
}
