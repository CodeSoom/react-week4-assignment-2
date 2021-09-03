import { useDispatch, useSelector } from 'react-redux';

import {
  updateRestaurantAddress,
  updateRestaurantCategory,
  updateRestaurantName,
} from '../store/actions';

import Input from '../presentational/Input';

export default function InputContainer() {
  const { restaurantName, restaurantCategory, restaurantAddress } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    dispatch(updateRestaurantName(event.target.value));
  };

  const handleChangeCategory = (event) => {
    dispatch(updateRestaurantCategory(event.target.value));
  };

  const handleChangeAddress = (event) => {
    dispatch(updateRestaurantAddress(event.target.value));
  };

  return (
    <>
      <Input
        ariaLabel="restaurantName"
        value={restaurantName}
        handleChange={handleChangeName}
      />
      <Input
        ariaLabel="restaurantCategory"
        value={restaurantCategory}
        handleChange={handleChangeCategory}
      />
      <Input
        ariaLabel="restaurantAddress"
        value={restaurantAddress}
        handleChange={handleChangeAddress}
      />
    </>
  );
}
