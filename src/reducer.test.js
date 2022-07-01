import reducer from './reducer';

describe('reducer', () => {
  const defaultName = '마녀주방';
  const defaultType = '한식';
  const defaultAddress = '서울시 강남구';

  context('without state', () => {
    const initialState = {
      restaurant: {
        name: '',
        type: '',
        address: '',
      },
      restaurants: [],
    };

    it('has the initial state', () => {
      const state = reducer(
        undefined,
        { type: undefined },
      );

      expect(state).toEqual(initialState);
    });
  });

  context('with unhandled actions', () => {
    it('does nothing', () => {
      const state = reducer(
        {
          restaurant: {
            name: defaultName,
            type: defaultType,
            address: defaultAddress,
          },
        },
        { type: undefined },
      );

      expect(state).toEqual({
        restaurant: {
          name: defaultName,
          type: defaultType,
          address: defaultAddress,
        },
      });
    });
  });

  describe('updateRestaurantName', () => {
    it('changes the restaurant name', () => {
      const state = reducer(
        {
          restaurant: {
            name: '',
          },
        },
        {
          type: 'updateRestaurantName',
          payload: { restaurantName: defaultName },
        },
      );

      expect(state.restaurant.name).toBe(defaultName);
    });
  });

  describe('updateRestaurantType', () => {
    it('changes the restaurant type', () => {
      const state = reducer(
        {
          restaurant: {
            type: '',
          },
        },
        {
          type: 'updateRestaurantType',
          payload: { restaurantType: defaultType },
        },
      );

      expect(state.restaurant.type).toBe(defaultType);
    });
  });

  describe('updateRestaurantAddress', () => {
    it('changes the restaurant address', () => {
      const state = reducer(
        {
          restaurant: {
            address: '',
          },
        },
        {
          type: 'updateRestaurantAddress',
          payload: { restaurantAddress: defaultAddress },
        },
      );

      expect(state.restaurant.address).toBe(defaultAddress);
    });
  });

  describe('addRestaurant', () => {
    const reduceAddRestaurant = ({
      restaurantName,
      restaurantType,
      restaurantAddress,
      newId,
    }) => reducer(
      {
        restaurant: {
          name: restaurantName,
          type: restaurantType,
          address: restaurantAddress,
        },
        restaurants: [],
      },
      {
        type: 'addRestaurant',
        payload: {
          newId,
        },
      },
    );

    context('with a valid restaurant', () => {
      it('appends the restaurant with a new id into restaurants', () => {
        const newId = Date.now();

        const state = reduceAddRestaurant({
          restaurantName: defaultName,
          restaurantType: defaultType,
          restaurantAddress: defaultAddress,
          newId,
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).toBe(newId);
        expect(state.restaurants[0].name).toBe(defaultName);
        expect(state.restaurants[0].type).toBe(defaultType);
        expect(state.restaurants[0].address).toBe(defaultAddress);
      });

      it('makes all properties of the restaurant blank', () => {
        const state = reduceAddRestaurant({
          restaurantName: defaultName,
          restaurantType: defaultType,
          restaurantAddress: defaultAddress,
          newId: Date.now(),
        });

        expect(state.restaurant.name).toBe('');
        expect(state.restaurant.type).toBe('');
        expect(state.restaurant.address).toBe('');
      });
    });

    context('without a new id', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: defaultName,
          restaurantType: defaultType,
          restaurantAddress: defaultAddress,
          newId: undefined,
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without the restaurant name', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: '',
          restaurantType: defaultType,
          restaurantAddress: defaultAddress,
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without the restaurant type', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: defaultName,
          restaurantType: '',
          restaurantAddress: defaultAddress,
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without the restaurant address', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          restaurantName: defaultName,
          restaurantType: defaultType,
          restaurantAddress: '',
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
