import RestaurantInput from '../components/RestaurantInput';
import RestaurantList from '../components/RestaurantList';

const RestaurantPage = () => {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantInput />
      <RestaurantList />
    </div>
  );
};

export default RestaurantPage;
