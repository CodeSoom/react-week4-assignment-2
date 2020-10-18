import reducer from './reducer';

import { updateRestaurant, addRestaurant } from './actions';
import {
  inputTypes, restaurantsFixture, restaurantFixture, initRestaurant,
} from './fixtures/fixtures';

describe('reducer', () => {
  describe('updateRestaurant', () => {
    it('레스토랑에 대한 정보를 입력한다.', () => {
      inputTypes.forEach(({ value, inputName }) => {
        const { restaurant } = reducer({
          restaurant: initRestaurant,
        }, updateRestaurant({ value, name: inputName }));

        expect(restaurant[inputName]).toBe(value);
      });
    });
  });

  describe('addRestaurant', () => {
    const addRestaurantReducer = (restaurant) => reducer({
      id: 1,
      restaurant,
      restaurants: [],
    }, addRestaurant());

    context('with restaurant', () => {
      it('레스토랑에 대한 정보를 등록한다.', () => {
        const { restaurant, restaurants } = addRestaurantReducer(restaurantFixture);

        expect(restaurants[0].id).not.toBeUndefined();
        expect(restaurants).toHaveLength(1);
        expect(restaurants[restaurants.length - 1].id).toBe(1);
        expect(restaurant).toEqual(initRestaurant);
      });
    });

    context('without restaurant', () => {
      it('할 일이 추가되지 않는다.', () => {
        const { restaurants } = addRestaurantReducer(initRestaurant);

        expect(restaurants).toHaveLength(0);
      });
    });
  });

  describe('with undefined action', () => {
    it('returns initialState', () => {
      const { restaurants } = reducer(
        {
          restaurants: restaurantsFixture,
        },
        { type: 'undefined', payload: {} },
      );

      expect(restaurants).toHaveLength(3);
    });

    it("don't returns initialState", () => {
      const { restaurants } = reducer(
        undefined,
        { type: 'undefined', payload: {} },
      );

      expect(restaurants).toHaveLength(0);
    });
  });
});
