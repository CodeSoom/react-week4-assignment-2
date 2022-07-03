import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('<App/>', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderApp = () => render((
    <App />
  ));

  it('dispatch 호출', () => {
    renderApp();

    expect(dispatch).toBeCalledWith({
      type: 'setRestaurants',
      payload: { restaurants },
    });
  });

  it('타이틀이 보인다', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
