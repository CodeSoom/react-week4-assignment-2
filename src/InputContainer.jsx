import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant, updateRestaurantInput } from './actions';

export default function InputContainer() {
  const { restaurantName, restaurantCategory, restaurantAddress } = useSelector(
    (selector) => ({
      restaurantName: selector.restaurantName,
      restaurantCategory: selector.restaurantCategory,
      restaurantAddress: selector.restaurantAddress,
    }),
  );
  const dispatch = useDispatch();
  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }
  function handleOnChangeInput(name, value) {
    dispatch(updateRestaurantInput(name, value));
  }

  return (
    <div>
      <input
        placeholder="이름"
        value={restaurantName}
        onChange={(e) => {
          handleOnChangeInput('name', e.target.value);
        }}
      />
      <input
        placeholder="분류"
        value={restaurantCategory}
        onChange={(e) => {
          handleOnChangeInput('category', e.target.value);
        }}
      />
      <input
        placeholder="주소"
        value={restaurantAddress}
        onChange={(e) => {
          handleOnChangeInput('address', e.target.value);
        }}
      />
      <button type="button" onClick={handleAddRestaurant}>
        등록
      </button>
    </div>
  );
}
