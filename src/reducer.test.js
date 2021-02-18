import reducer from './reducer';

import {
  updateRestaurantInformation,
  addRestaurant,
} from './actions';

describe('reducer', () => {
  const restaurantInfomration = {
    name: '베이징',
    category: '중식',
    address: '파주시',
  };

  context('without action type', () => {
    it("doesn't change state", () => {
      const state = reducer({ restaurantInfomration });

      expect(state.restaurantInfomration).toBe(restaurantInfomration);
    });
  });

  context('with action type', () => {
    describe('updateRestaurantInformation', () => {
      it('changes the name of the restaurant', () => {
        const state = reducer({
          restaurantInfomration,
        }, updateRestaurantInformation({ name: '봉참치' }));

        expect(state.restaurantInfomration.name).toBe('송화루');
      });

      it('changes the category of the restaurant', () => {
        const state = reducer({
          restaurantInfomration,
        }, updateRestaurantInformation({ category: '일식' }));

        expect(state.restaurantInfomration.category).toBe('일식');
      });

      it('changes the address of the restaurant', () => {
        const state = reducer({
          restaurantInfomration,
        }, updateRestaurantInformation({ address: '서울' }));

        expect(state.restaurantInfomration.address).toBe('서울');
      });
    });
  });
});
