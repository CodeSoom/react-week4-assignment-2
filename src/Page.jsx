import RestaurantList from './RestaurantList';
import RestaurantNameInput from './RestaurantNameInput';
import RestaurantCategoryInput from './RestaurantCategoryInput';
import RestaurantAddressInput from './RestaurantAddressInput';
import RestaurantRegisterButton from './RestaurantRegisterButton';

export default function Page({
  restaurants,
  handleNameChange, name,
  handleCategoryChange, category,
  handleAddressChange, address,
  handleRegisterRestaurant,
}) {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList
        restaurants={restaurants}
      />
      <RestaurantNameInput
        onChange={handleNameChange}
        value={name}
      />
      <RestaurantCategoryInput
        onChange={handleCategoryChange}
        value={category}
      />
      <RestaurantAddressInput
        onChange={handleAddressChange}
        value={address}
      />
      <RestaurantRegisterButton
        onClick={handleRegisterRestaurant}
      />
    </div>
  );
}
