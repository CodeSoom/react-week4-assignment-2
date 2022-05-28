import { useDispatch, useSelector } from 'react-redux';

import {
  updateName, updateType, updateAddress, addRestaurant,
} from './actions';

export default function App() {
  const {
    restaurants, restaurantName, restaurantType, restaurantAddress,
  } = useSelector((state) => ({
    restaurants: state.restaurants,
    restaurantName: state.restaurantName,
    restaurantType: state.restaurantType,
    restaurantAddress: state.restaurantAddress,
  }));

  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }

  function handleChangeType(event) {
    dispatch(updateType(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleClickAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <div>
      <h1>Restaurants</h1>
      {restaurants && (
        <ul>
          {restaurants.map((restaurant) => {
            const { name, type, address } = restaurant;
            return (
              <li key={restaurant.id}>
                {`${name} | ${type} | ${address}` }
              </li>
            );
          })}
        </ul>
      )}
      <input id="name" type="text" placeholder="이름" value={restaurantName} onChange={handleChangeName} />
      <input type="text" placeholder="분류" value={restaurantType} onChange={handleChangeType} />
      <input type="text" placeholder="주소" value={restaurantAddress} onChange={handleChangeAddress} />
      <button type="submit" onClick={handleClickAddRestaurant}>등록</button>
    </div>
  );
}
