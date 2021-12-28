import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant,
  changeAddress,
  changeCategory,
  changeName,
} from '../store/actions';

import RestaurantForm from './RestaurantForm';

export default function RestaurantFormContainer() {
  const { name, category, address } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleChange = ({ name: newName, category: newCategory, address: newAddress }) => {
    dispatch(changeName(newName));
    dispatch(changeCategory(newCategory));
    dispatch(changeAddress(newAddress));
  };

  const handleSubmit = (newRestaurant) => {
    dispatch(addRestaurant(newRestaurant));
    dispatch(changeName(''));
    dispatch(changeCategory(''));
    dispatch(changeAddress(''));
  };

  return (
    <RestaurantForm
      value={{ name, category, address }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
