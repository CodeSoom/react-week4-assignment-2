import { addRestaurant } from './actions';

test('addRestaurant action creator', () => {
  const newRestaurant = {
    id: 2, name: '시카고피자', category: '양식', address: '이태원동',
  };

  expect(addRestaurant(newRestaurant)).toEqual({
    type: 'AddRestaurant',
    payload: {
      id: 2,
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  });
});
