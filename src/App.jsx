import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRestaurants } from './actions';

import { restaurants } from './reducer';

import InputContainer from './InputContainer';

import ListContainer from './ListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
    </div>
  );
}
