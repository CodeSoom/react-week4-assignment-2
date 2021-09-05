import { useDispatch, useSelector } from 'react-redux';

import Register from './Register';

import {
  updateRestaurantInfo,
  addRestaurant,
} from '../../store/actions';

export default function RegisterContainer() {
  const dispatch = useDispatch();

  const { name, category, address } = useSelector((state) => ({
    name: state.name,
    category: state.category,
    address: state.address,
  }));

  const handleChange = (infoType) => (event) => {
    dispatch(updateRestaurantInfo(infoType, event.target.value));
  };

  const handleClick = () => {
    dispatch(addRestaurant());
  };

  return (
    <Register
      name={name}
      category={category}
      address={address}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}
