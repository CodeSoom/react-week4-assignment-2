import { useSelector, useDispatch } from 'react-redux';

import { addRestaurants, updateRestaurantInfo } from './actions';

export default function InputContainer() {
  const {
    restaurantInfo: { name, address, category },
  } = useSelector((state) => ({
    restaurantInfo: state.restaurantInfo,
  }));

  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    dispatch(updateRestaurantInfo({ name, value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addRestaurants());
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        onChange={handleInput}
        value={name}
        type="text"
        placeholder="이름"
        name="name"
      />
      <input
        onChange={handleInput}
        value={category}
        type="text"
        placeholder="분류"
        name="category"
      />
      <input
        onChange={handleInput}
        value={address}
        type="text"
        placeholder="주소"
        name="address"
      />
      <button type="submit">등록</button>
    </form>
  );
}
