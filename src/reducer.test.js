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
});
