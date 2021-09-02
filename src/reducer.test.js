import reducer from './reducer';

describe('reducer', () => {
  context('with an action not existed', () => {
    const notExistedAction = jest.fn();

    notExistedAction.mockImplementation(() => ({
      type: 'notExistedAction',
    }));

    it('returns state not changed', () => {
      const state = reducer(undefined, notExistedAction());

      expect(state.newId).toBe(100);
      expect(state.nameText).toBe('');
      expect(state.categoryText).toBe('');
      expect(state.addressText).toBe('');
      expect(state.restaurants).toHaveLength(0);
    });
  });
});
