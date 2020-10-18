import restaurant from './restaurant';

import {
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantAddr,
  addRestaurant,
} from '../actions';

describe('restaurant reducer', () => {
  describe('updateRestaurantName', () => {
    const reduceUpdateRestaurantName = () => restaurant({
      name: '',
    }, updateRestaurantName('마녀주방'));

    it('change restaurnt name', () => {
      const state = reduceUpdateRestaurantName();

      expect(state.name).toBe('마녀주방');
    });
  });

  describe('updateRestaurantCategory', () => {
    const reduceUpdateRestaurantCategory = () => restaurant({
      category: '',
    }, updateRestaurantCategory('한식'));
    it('change restaurnt category', () => {
      const state = reduceUpdateRestaurantCategory();

      expect(state.category).toBe('한식');
    });
  });

  describe('updateRestaurantAddr', () => {
    const reduceUpdateRestaurantAddr = () => restaurant({
      address: '',
    }, updateRestaurantAddr('서울시 성동구'));
    it('change restaurnt category', () => {
      const state = reduceUpdateRestaurantAddr();

      expect(state.address).toBe('서울시 성동구');
    });
  });

  describe('addRestaurant', () => {
    const reduceAddRestaurant = ({ name, category, address }) => restaurant({
      newId: 100,
      name,
      category,
      address,
      items: [],
    }, addRestaurant());

    context('add restaurnt category', () => {
      it('appends a new state into restaurant', () => {
        const state = reduceAddRestaurant({
          name: '마녀사냥',
          category: '한식',
          address: '서울시 성동구',
        });

        expect(state.items).toHaveLength(1);
        expect(state.items[0].id).not.toBeUndefined();
        expect(state.items[0].name).toBe('마녀사냥');
        expect(state.items[0].category).toBe('한식');
        expect(state.items[0].address).toBe('서울시 성동구');
      });

      it('clear input value', () => {
        const state = reduceAddRestaurant({
          name: '마녀사냥',
          category: '한식',
          address: '서울시 성동구',
        });

        expect(state.name).toBe('');
        expect(state.category).toBe('');
        expect(state.address).toBe('');
      });
    });

    context('without name & category & address', () => {
      it("doesn't work", () => {
        const state = reduceAddRestaurant({
          name: '',
          category: '',
          address: '',
        });

        expect(state.items).toHaveLength(0);
      });
    });
  });
});
