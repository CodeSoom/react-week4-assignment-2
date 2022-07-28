import { useDispatch, useSelector } from 'react-redux';

import {
  changeName,
  changeType,
  changeLocation,
  addRestaurant,
} from './actions';

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
    if (inputName === 'type') {
      dispatch(changeType(input));
    }
    if (inputName === 'location') {
      dispatch(changeLocation(input));
    }
  }

  function submitNewRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={restaurantName}
        onChange={(e) => handleChangeRestaurant('name', e.target.value)}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        value={restaurantType}
        onChange={(e) => handleChangeRestaurant('type', e.target.value)}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        value={restaurantLocation}
        onChange={(e) => handleChangeRestaurant('location', e.target.value)}
      />
      <button type="button" onClick={submitNewRestaurant}>등록</button>
    </form>
  );
}
