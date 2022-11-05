import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import ListContainer from './ListContainer';

import restaurantList from '../fixtures/restaurantList';

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderListContainer = () => render((<ListContainer />));

  it('', () => {
    renderListContainer();
  });
});
