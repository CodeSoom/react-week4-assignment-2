import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input';

import restaurantList from '../fixtures/restaurantList';

describe('Input', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderInput = () => render((<Input />));

  it('', () => {
    renderInput();
  });
});
