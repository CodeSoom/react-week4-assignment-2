import reducer from './reducer';

import actions, { ADD_RESTAURANT } from './actions';

describe('reducer', () => {
  describe(ADD_RESTAURANT, () => {
    it('add restaurant to the list', () => {
      // Given
      const previousState = { restaurants: [] };
      const action = actions.addRestaurant('이름 | 분류 | 주소');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({ restaurants: ['이름 | 분류 | 주소'] });
    });
  });
});
