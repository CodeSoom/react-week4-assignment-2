import { useSelector } from 'react-redux';
import Restaurants from './Restaurants';

const RestaurantsContainer = () => {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <Restaurants restaurants={restaurants} />
  );
};
export default RestaurantsContainer;
