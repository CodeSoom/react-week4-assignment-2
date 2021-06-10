import { useDispatch, useSelector } from 'react-redux';

import { addRestaurant } from './actions';

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
  return (
    <div>
      <input placeholder="이름" value={restaurantName} />
      <input placeholder="분류" value={restaurantCategory} />
      <input placeholder="주소" value={restaurantAddress} />
      <button type="button" onClick={handleAddRestaurant}>
        등록
      </button>
    </div>
  );
}
