import { useDispatch, useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import { Restaurant } from '../@types';
import { addNewRestaurant } from '../store/actions';

const RestaurantsFormContainer = () => {
  const { inputValues } = useSelector((state) => ({
    inputValues: state.inputValues,
  }));

  const dispatch = useDispatch();

  const updateRestaurantForm = (e) => {
    setInputValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitNewRestaurantForm = (e) => {
    e.preventDefault();

    const newRestaurant = new Restaurant(inputValues);

    dispatch(addNewRestaurant(newRestaurant));
  };

  return (
    <RestaurantForm
      inputValues={inputValues}
      onSubmitNewRestaurant={submitNewRestaurantForm}
    />
  );
};

export default RestaurantsFormContainer;
