import { useSelector } from 'react-redux';

import RestaurantForm from './RestaurantForm';

const RestaurantsFormContainer = () => {
  const { inputValues } = useSelector((state) => ({
    inputValues: state.inputValues,
  }));

  return (
    <RestaurantForm inputValues={inputValues} />
  );
};
export default RestaurantsFormContainer;
