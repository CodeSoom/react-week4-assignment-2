import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import InputContainer from './InputContainer';

import restaurantList from '../fixtures/restaurantList';

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  const renderInputContainer = () => render((<InputContainer />));

  it('', () => {
    renderInputContainer();
  });
});
