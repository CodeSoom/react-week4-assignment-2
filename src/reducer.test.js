import reducer from './reducer';

describe('reducer', () => {
  const defaultName = '마녀주방';
  const defaultType = '한식';
  const defaultAddress = '서울시 강남구';

  context('without state', () => {
    const initialState = {
      nameInput: '',
      typeInput: '',
      addressInput: '',
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
          nameInput: defaultName,
          type: defaultType,
          address: defaultAddress,
        },
        { type: undefined },
      );

      expect(state).toEqual({
        nameInput: defaultName,
        type: defaultType,
        address: defaultAddress,
      });
    });
  });

  describe('updateNameInput', () => {
    it('changes the name input', () => {
      const state = reducer(
        { nameInput: '' },
        {
          type: 'updateNameInput',
          payload: { name: defaultName },
        },
      );

      expect(state.nameInput).toBe(defaultName);
    });
  });

  describe('updateTypeInput', () => {
    it('changes the type input', () => {
      const state = reducer(
        { typeInput: '' },
        {
          type: 'updateTypeInput',
          payload: { type: defaultType },
        },
      );

      expect(state.typeInput).toBe(defaultType);
    });
  });

  describe('updateAddressInput', () => {
    it('changes the address input', () => {
      const state = reducer(
        { addressInput: '' },
        {
          type: 'updateAddressInput',
          payload: { address: defaultAddress },
        },
      );

      expect(state.addressInput).toBe(defaultAddress);
    });
  });

  describe('addRestaurant', () => {
    const reduceAddRestaurant = ({
      nameInput,
      typeInput,
      addressInput,
      newId,
    }) => reducer(
      {
        nameInput,
        typeInput,
        addressInput,
        restaurants: [],
      },
      {
        type: 'addRestaurant',
        payload: {
          newId,
        },
      },
    );

    context('with all inputs', () => {
      it('appends a new restaurant with a new id into restaurants', () => {
        const newId = Date.now();

        const state = reduceAddRestaurant({
          nameInput: defaultName,
          typeInput: defaultType,
          addressInput: defaultAddress,
          newId,
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).toBe(newId);
        expect(state.restaurants[0].name).toBe(defaultName);
        expect(state.restaurants[0].type).toBe(defaultType);
        expect(state.restaurants[0].address).toBe(defaultAddress);
      });

      it('makes all inputs blank', () => {
        const state = reduceAddRestaurant({
          nameInput: defaultName,
          typeInput: defaultType,
          addressInput: defaultAddress,
          newId: Date.now(),
        });

        expect(state.nameInput).toBe('');
        expect(state.typeInput).toBe('');
        expect(state.addressInput).toBe('');
      });
    });

    context('without nameInput', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          nameInput: '',
          typeInput: defaultType,
          addressInput: defaultAddress,
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without typeInput', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          nameInput: defaultName,
          typeInput: '',
          addressInput: defaultAddress,
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });

    context('without addressInput', () => {
      it('does nothing', () => {
        const state = reduceAddRestaurant({
          nameInput: defaultName,
          typeInput: defaultType,
          addressInput: '',
          newId: Date.now(),
        });

        expect(state.restaurants).toHaveLength(0);
      });
    });
  });
});
