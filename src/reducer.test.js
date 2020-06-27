import reducer from './reducer';

import {
  changeName, changeCategory, changeAddress, clickSubmit,
} from './actions';

test('reducer', () => {
  const testState = {
    newId: 2,
    name: '고봉민김밥',
    category: '분식',
    address: '강남',
    restaurants: [{
      id: 1, name: '맘스터치', category: '패스트푸드', address: '용인수지',
    }],
  };
  // TODO: set initial state
  // TODO: no action type
  // TODO: changeName test
  // TODO: changeCategory test
  // TODO: changeAddress test
  // TODO: clickSubmit - context1: all inputs are filled, context2: any input is missing

  const state = reducer(testState, clickSubmit());

  expect(state.restaurants[1].id).not.toBeUndefined();
  expect(state.restaurants[1].name).toBe('고봉민김밥');
  expect(state.restaurants[1].category).toBe('분식');
  expect(state.restaurants[1].address).toBe('강남');
});
