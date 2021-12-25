import { useDispatch, useSelector } from 'react-redux';

import Form from './Form';
import { addRestaurant, changeForm } from '../actions';

const FormContainer = () => {
  const restaurant = useSelector((store) => store.restaurant);
  const { title, menu, address } = restaurant;

  const dispatch = useDispatch();

  const handleAddRestaurant = () => {
    dispatch(addRestaurant(restaurant));
  };
  const handleFormChange = ({ target: { value, name } }) => {
    dispatch(changeForm({ [name]: value }));
  };
  return (
    <Form
      title={title}
      menu={menu}
      address={address}
      onClick={handleAddRestaurant}
      onChange={handleFormChange}
    />
  );
};

export default FormContainer;
