import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';

import {
  updateInformation,
  addRestaurant,
} from './actions';

function selector(state) {
  return {
    information: state.information,
  };
}

export default function FormContainer() {
  const { information } = useSelector(selector);

  const { name, category, address } = information;

  const dispatch = useDispatch();

  function handleChange({ restaurantInformation }) {
    dispatch(updateInformation({ information: restaurantInformation }));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <Form
      name={name}
      category={category}
      address={address}
      onChange={handleChange}
      onClick={handleClickAddRestaurant}
    />
  );
}
