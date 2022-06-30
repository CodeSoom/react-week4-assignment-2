import reducer from './reducer';

describe('reducer', () => {
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
          nameInput: '마녀주방',
          type: '한식',
          address: '서울시 강남구',
        },
        { type: undefined },
      );

      expect(state).toEqual({
        nameInput: '마녀주방',
        type: '한식',
        address: '서울시 강남구',
      });
    });
  });

  describe('updateNameInput', () => {
    it('changes the name input', () => {
      const state = reducer(
        { nameInput: '' },
        {
          type: 'updateNameInput',
          payload: { name: '마녀주방' },
        },
      );

      expect(state.nameInput).toBe('마녀주방');
    });
  });

  describe('updateTypeInput', () => {
    it('changes the type input', () => {
      const state = reducer(
        { typeInput: '' },
        {
          type: 'updateTypeInput',
          payload: { type: '한식' },
        },
      );

      expect(state.typeInput).toBe('한식');
    });
  });

  describe('updateAddressInput', () => {
    it('changes the address input', () => {
      const state = reducer(
        { addressInput: '' },
        {
          type: 'updateAddressInput',
          payload: { address: '서울시 강남구' },
        },
      );

      expect(state.addressInput).toBe('서울시 강남구');
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
          nameInput: '마녀주방',
          typeInput: '한식',
          addressInput: '서울시 강남구',
          newId,
        });

        expect(state.restaurants).toHaveLength(1);
        expect(state.restaurants[0].id).toBe(newId);
        expect(state.restaurants[0].name).toBe('마녀주방');
        expect(state.restaurants[0].type).toBe('한식');
        expect(state.restaurants[0].address).toBe('서울시 강남구');
      });

      it('makes all inputs blank', () => {
        const state = reduceAddRestaurant({
          nameInput: '마녀주방',
          typeInput: '한식',
          addressInput: '서울시 강남구',
          newId: Date.now(),
        });

        expect(state.nameInput).toBe('');
        expect(state.typeInput).toBe('');
        expect(state.addressInput).toBe('');
      });
    });
  });
});
