import reducer from '../../src/store/reducer';
import { changeInput } from '../../src/store/actions';

describe('reducer', () => {
  it('초기에는 초기 상태를 반환한다.', () => {
    const state = reducer();

    expect(state).toEqual({
      newId: 100,
      input: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [],
    });
  });

  describe('changeInput', () => {
    it('넘겨받은 key 와 value 기반으로 새로운 input state 를 반환한다.', () => {
      const prevState = {
        input: {
          name: '',
          category: '',
          address: '',
        },
      };

      const action = changeInput('name', 'hello');

      const state = reducer(prevState, action);
      expect(state.input.name).toBe('hello');
    });

    it('유료하지 않은 key 라면 기존 상태를 반환한다.', () => {
      const prevState = {
        input: {
          name: '',
          category: '',
          address: '',
        },
      };

      const action = changeInput('banana', 'hello');

      const state = reducer(prevState, action);
      expect(state).toEqual(prevState);
    });
  });
});
