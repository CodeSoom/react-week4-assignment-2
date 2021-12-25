import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';
import List from './List';
import { updateRestaurant, addRestaurant } from './actions';

export default function App() {
  const dispatch = useDispatch();

  const { restaurants, restaurant } = useSelector((state) => ({
    restaurants: state.restaurants,
    restaurant: state.restaurant,
  }));

  const handleChangeRestaurant = (e) => {
    dispatch(
      updateRestaurant(e.target.name, e.target.value),
    );
  };

  const handleClickAddButton = () => {
    dispatch(
      addRestaurant(restaurant),
    );
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <List restaurants={restaurants} />
      <Input
        restaurant={restaurant}
        onChange={handleChangeRestaurant}
        onClick={handleClickAddButton}
      />
    </div>
  );
}
