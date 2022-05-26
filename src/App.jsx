import { useSelector, useDispatch } from 'react-redux';

import RestaurantList from './RestaurantList';
import TextBox from './TextBox';
import { updateRestaurantInfo, addRestaurant } from './actions';

function selector(state) {
  return {
    restaurantInfo: state.restaurantInfo,
    restaurants: state.restaurants,
  };
}

export default function App() {
  const dispatch = useDispatch();

  const { restaurantInfo, restaurants } = useSelector(selector);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateRestaurantInfo(name, value));
  };
  const handleClick = () => {
    dispatch((addRestaurant()));
  };
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList restaurants={restaurants} />
      <TextBox
        restaurantInfo={restaurantInfo}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  );
}
