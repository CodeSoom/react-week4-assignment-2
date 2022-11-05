import { useDispatch, useSelector } from 'react-redux';

import { updateRestaurant, addRestaurant } from './actions';

export default function App() {
  const { restaurantName, category, address } = useSelector((state) => ({
    restaurantName: state.restaurantName,
    category: state.category,
    address: state.address,
  }));

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateRestaurant(e.target.name, e.target.value));
  }

  function handleSubmit() {
    dispatch(addRestaurant());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <form>
        <input
          type="text"
          name="restaurantName"
          placeholder="이름"
          value={restaurantName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="분류"
          value={category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={address}
          onChange={handleChange}
        />
      </form>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        등록

      </button>
    </div>
  );
}
