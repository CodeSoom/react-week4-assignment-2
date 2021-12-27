import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, changeRestaurantField } from './actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const handleChange = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
  };

  const handleClick = () => {
    dispatch(addRestaurant());
  };

  return (
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
