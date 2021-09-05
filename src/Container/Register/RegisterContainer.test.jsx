import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegisterContainer from './RegisterContainer';

jest.mock('react-redux');

describe('RegisterContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('has taskTitle of redux state as a input value', () => {
    useSelector.mockImplementation((selector) => selector({
      name: '마녀주방',
      category: '분식',
      address: '서울시 강남구',
    }));

    const { getByDisplayValue } = render((
      <RegisterContainer />
    ));

    expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
    expect(getByDisplayValue(/분식/)).not.toBeNull();
    expect(getByDisplayValue(/서울시 강남구/)).not.toBeNull();
  });
});
