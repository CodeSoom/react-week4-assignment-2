import reducer from './reducer';

import {
  updateRestuarantName,
  updateRestuarantCategory,
  updateRestuarantAddress,
} from './actions';

describe('reducer', () => {
  it('changes restuarant name', () => {
    const previousState = { restuarantName: '' };
    const nextState = reducer(previousState, updateRestuarantName('시카고피자'));

    expect(nextState.restuarantName).toBe('시카고피자');
  });

  it('changes restuarant category', () => {
    const previousState = { restuarantCategory: '' };
    const nextState = reducer(previousState, updateRestuarantCategory('양식'));

    expect(nextState.restuarantCategory).toBe('양식');
  });

  it('changes restuarant address', () => {
    const previousState = { restuarantAddress: '' };
    const nextState = reducer(previousState, updateRestuarantAddress('서울시 강남구'));

    expect(nextState.restuarantAddress).toBe('서울시 강남구');
  });
});
