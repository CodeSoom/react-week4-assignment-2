import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';

import {
  setRestaurants,
} from './actions';

export default function ListContainer() {
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, [restaurants]);

  return (
    <List restaurants={restaurants} />
  );
}
