import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import List from './List';

import restaurantList from '../fixtures/restaurantList';

describe('List', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderList = () => render((
    <List
      restaurantList={restaurantList}
    />));

  it('', () => {
    renderList();
  });
});
