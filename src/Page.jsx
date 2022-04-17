import RestaurantList from './RestaurantList';
import RestaurantRegisterForm from './RestaurantRegisterForm';

export default function Page({
  restaurants,
  name, category, address,
  onChange, onClick,
}) {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList
        restaurants={restaurants}
      />
      <RestaurantRegisterForm
        name={name}
        category={category}
        address={address}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}
