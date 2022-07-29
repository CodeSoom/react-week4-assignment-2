import reducer from './reducer';

import {
  setRestaurants,
  changeNewRestaurant,
  addRestaurant,
} from './actions';

describe('Reducer', () => {
  const initialState = {
    name: '백촌막국수',
    category: '한식',
    address: '강원도',
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
      const name = '소울브릿지';

      expect(reducer(initialState, changeNewRestaurant({ inputName: 'name', input: name }))).toEqual({
        ...initialState,
        name,
      });
    });
  });

  context('with changeType', () => {
    it('returns updated type', () => {
      const category = '브런치';

      expect(reducer(initialState, changeNewRestaurant({ inputName: 'category', input: category }))).toEqual({
        ...initialState,
        category,
      });
    });
  });

  context('with changeLocation', () => {
    it('returns updated location', () => {
      const address = '고성';

      expect(reducer(initialState, changeNewRestaurant({ inputName: 'address', input: address }))).toEqual({
        ...initialState,
        address,
      });
    });
  });

  context('with addRestaurant', () => {
    it('returns updates restaurants with a new restaurant', () => {
      const {
        name,
        category,
        address,
      } = initialState;

      expect(reducer(initialState, addRestaurant())).toEqual({
        ...initialState,
        name: '',
        category: '',
        address: '',
        newId: 1,
        restaurants: [
          {
            id: 0,
            name,
            category,
            address,
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
        name: '',
        category: '',
        address: '',
        newId: 0,
        restaurants: [],
      });
    });
  });
});
