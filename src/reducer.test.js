import reducer from './reducer';

import {
  setRestaurants,
  changeName,
  changeType,
  changeLocation,
  addRestaurant,
} from './actions';

const initialState = {
  restaurantName: '원래 이름',
  restaurantType: '원래 장르',
  restaurantLocation: '원래 위치',
  newId: 0,
  restaurants: [],
};

describe('Reducer', () => {
  context('action type is setRestaurants', () => {
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
  context('action type is changeName', () => {
    it('returns updated name', () => {
      const name = '새로운 가게';
      expect(reducer(initialState, changeName(name))).toEqual({
        ...initialState,
        restaurantName: name,
      });
    });
  });
  context('action type is changeType', () => {
    it('returns updated type', () => {
      const type = '새로운 장르';
      expect(reducer(initialState, changeType(type))).toEqual({
        ...initialState,
        restaurantName: type,
      });
    });
  });
  context('action type is changeLocation', () => {
    it('returns updated location', () => {
      const location = '새로운 위치';
      expect(reducer(initialState, changeLocation(location))).toEqual({
        ...initialState,
        restaurantName: location,
      });
    });
  });
  context('action type is addRestaurant', () => {
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
});
