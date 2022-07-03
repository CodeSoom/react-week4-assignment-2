import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import FormContainer from './FormContainer';
import ListContainer from './ListContainer';

import restaurants from '../fixtures/restaurants';

import { setRestaurants } from './store/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);
  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <FormContainer />
    </div>
  );
}
