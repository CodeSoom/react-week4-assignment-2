import { useDispatch, useSelector } from 'react-redux';

import {
  updateRestaurantAddress,
  updateRestaurantCategory,
  updateRestaurantName,
  addRestaurant,
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

  const handleClick = () => {
    dispatch(addRestaurant());
  };

  return (
    <>
      <Input
        ariaLabel="restaurantName"
        value={restaurantName}
        handleChange={handleChangeName}
        inputName="name"
        placeholder="이름"
      />
      <Input
        ariaLabel="restaurantCategory"
        value={restaurantCategory}
        handleChange={handleChangeCategory}
        inputName="category"
        placeholder="분류"
      />
      <Input
        ariaLabel="restaurantAddress"
        value={restaurantAddress}
        handleChange={handleChangeAddress}
        inputName="address"
        placeholder="주소"
      />
      <button
        type="button"
        onClick={handleClick}
      >
        등록
      </button>
    </>
  );
}
