import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import InputContainer from './InputContainer';
import ListContainer from './ListContainer';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <ListContainer />
      <InputContainer />
    </div>
  );
}
