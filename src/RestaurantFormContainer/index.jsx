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

  const handleChangeName = (newName) => {
    dispatch(changeName(newName));
  };

  const handleChangeCategory = (newCategory) => {
    dispatch(changeCategory(newCategory));
  };

  const handleChangeAddress = (newAddress) => {
    dispatch(changeAddress(newAddress));
  };

  const handleSubmit = (newRestaurant) => {
    dispatch(addRestaurant(newRestaurant));
  };

  return (
    <RestaurantForm
      name={name}
      category={category}
      address={address}
      onChangeName={handleChangeName}
      onChangeCategory={handleChangeCategory}
      onChangeAddress={handleChangeAddress}
      onSubmit={handleSubmit}
    />
  );
}
