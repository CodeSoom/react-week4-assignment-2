import reducer from './reducer';
import { addRestaurant } from './actions';

it('adds new restaurant and updates id', () => {
  const newRestaurant = {
    id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
  };

  const newState = reducer(undefined, addRestaurant(newRestaurant));

  expect(newState).toEqual({
    id: 2,
    name: '',
    category: '',
    address: '',
    restaurants: [newRestaurant],
  });
});
