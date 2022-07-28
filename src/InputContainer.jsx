import { useDispatch, useSelector } from 'react-redux';

import {
  changeName,
  changeType,
  changeLocation,
  addRestaurant,
} from './actions';

import Input from './Input';

export default function InputContainer() {
  const dispatch = useDispatch();

  function selector(state) {
    return {
      restaurantName: state.restaurantName,
      restaurantType: state.restaurantType,
      restaurantLocation: state.restaurantLocation,
    };
  }

  const {
    restaurantName,
    restaurantType,
    restaurantLocation,
  } = useSelector(selector);

  function handleChangeRestaurant(inputName, input) {
    if (inputName === 'name') {
      dispatch(changeName(input));
    }
    if (inputName === 'category') {
      dispatch(changeType(input));
    }
    if (inputName === 'address') {
      dispatch(changeLocation(input));
    }
  }

  function submitNewRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <form>
      <Input
        type="text"
        name="name"
        placeholder="이름"
        value={restaurantName}
        onChange={handleChangeRestaurant}
      />
      <Input
        type="text"
        name="category"
        placeholder="분류"
        value={restaurantType}
        onChange={handleChangeRestaurant}
      />
      <Input
        type="text"
        name="address"
        placeholder="주소"
        value={restaurantLocation}
        onChange={handleChangeRestaurant}
      />
      <button type="button" onClick={submitNewRestaurant}>등록</button>
    </form>
  );
}
