import { useDispatch, useSelector } from 'react-redux';

function selector(state) {
  return {
    restaurantName: state.restaurantName,
  };
}

function updateRestaurant(restaurantName) {
  return {
    type: 'updateRestaurantName',
    payload: { restaurantName },
  };
}

export default function App() {
  const { restaurantName } = useSelector(selector);

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateRestaurant(e.target.value));
  }

  return (
    <div>
      <h1>Restaurants</h1>
      <form>
        <input
          type="text"
          placeholder="이름"
          value={restaurantName}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
