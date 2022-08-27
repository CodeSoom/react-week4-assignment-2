import { useSelector } from 'react-redux';

import FormContainer from './FormContainer';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

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
      <FormContainer />
    </>
  );
}
