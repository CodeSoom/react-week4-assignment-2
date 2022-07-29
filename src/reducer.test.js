import reducer from './reducer';

import {
  setRestaurants,
  changeNewRestaurant,
  addRestaurant,
} from './actions';

describe('Reducer', () => {
  const initialState = {
    restaurantName: '원래 이름',
    restaurantType: '원래 장르',
    restaurantLocation: '원래 위치',
    newId: 0,
    restaurants: [],
  };

  context('with setRestaurants', () => {
    it('returns updated restaurants', () => {
      const restaurants = [
        {
          id: 1,
          name: '마녀주방',
          type: '한식',
          location: '서울시 강남구',
        },
        {
          id: 2,
          name: '시카고 피자',
          type: '양식',
          location: '이태원동',
        },
        {
          id: 3,
          name: '키와미',
          type: '일식',
          location: '분당구 정자동',
        },
      ];

      expect(reducer(initialState, setRestaurants(restaurants))).toEqual({
        ...initialState,
        restaurants,
      });
    });
  });

  context('with changeNewRestaurant', () => {
    it('returns updated name', () => {
      const name = '새로운 가게';

      expect(reducer(initialState, changeNewRestaurant({ inputName: 'name', input: name }))).toEqual({
        ...initialState,
        restaurantName: name,
      });
    });
  });

  context('with changeType', () => {
    it('returns updated type', () => {
      const category = '새로운 장르';

      expect(reducer(initialState, changeNewRestaurant({ inputName: 'category', input: category }))).toEqual({
        ...initialState,
        restaurantType: category,
      });
    });
  });

  context('with changeLocation', () => {
    it('returns updated location', () => {
      const address = '새로운 위치';

      expect(reducer(initialState, changeNewRestaurant({ inputName: 'address', input: address }))).toEqual({
        ...initialState,
        restaurantLocation: address,
      });
    });
  });

  context('with addRestaurant', () => {
    it('returns updates restaurants with a new restaurant', () => {
      const {
        restaurantName: name,
        restaurantType: type,
        restaurantLocation: location,
      } = initialState;

      expect(reducer(initialState, addRestaurant())).toEqual({
        ...initialState,
        restaurantName: '',
        restaurantType: '',
        restaurantLocation: '',
        newId: 1,
        restaurants: [
          {
            id: 0,
            name,
            type,
            location,
          },
        ],
      });
    });
  });

  context('with not predefined action', () => {
    it('returns initial state', () => {
      function randomAction() {
        return {
          type: 'random',
        };
      }

      expect(reducer(initialState, randomAction())).toEqual(initialState);
    });
  });

  context('without any action', () => {
    it('returns initial state', () => {
      expect(reducer()).toEqual({
        restaurantName: '',
        restaurantType: '',
        restaurantLocation: '',
        newId: 0,
        restaurants: [],
      });
    });
  });
});
