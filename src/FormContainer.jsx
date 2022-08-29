import { useSelector, useDispatch } from 'react-redux';

import Form from './Form';

import {
  updateInformation,
  addRestaurant,
} from './actions';

export default function FormContainer() {
  const { information } = useSelector((state) => ({
    information: state.information,
  }));

  const dispatch = useDispatch();

  function handleChange(event) {
    const { id, value } = event.target;

    dispatch(updateInformation(id, value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addRestaurant());
  }

  return (
    <Form
      information={information}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
