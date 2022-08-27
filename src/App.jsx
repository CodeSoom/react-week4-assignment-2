import { useSelector, useDispatch } from 'react-redux';

import {
  updateInformation,
  addRestaurant,
} from './actions';

export default function App() {
  const { information, restaurants } = useSelector((state) => ({
    information: state.information,
    restaurants: state.restaurants,
  }));

  const { name, classification, address } = information;

  const dispatch = useDispatch();

  function handleChange(event) {
    const { id, value } = event.target;

    dispatch(updateInformation(id, value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(addRestaurant());
  }

  return (
    <>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input id="name" type="text" placeholder="이름" value={name} onChange={handleChange} />
        <input id="classification" type="text" placeholder="분류" value={classification} onChange={handleChange} />
        <input id="address" type="text" placeholder="주소" value={address} onChange={handleChange} />
        <button type="submit">등록</button>
      </form>
    </>
  );
}
