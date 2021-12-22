import { useDispatch } from 'react-redux';

import { addRestaurants, updateRestaurantInfo } from './actions';

import RestaurantForm from './RestaurantForm';

export default function InputContainer() {
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    dispatch(updateRestaurantInfo({ name, value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addRestaurants());
  };

  return (
    <RestaurantForm onSubmitForm={handleFormSubmit} onChangeInput={handleInputChange} />
  );
}
