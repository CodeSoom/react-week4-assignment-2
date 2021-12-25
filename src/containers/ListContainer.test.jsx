import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  const renderListContainer = () => render(<ListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: [],
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('', () => {

  });
});
