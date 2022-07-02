import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('<App/>', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderApp = () => render((
    <App />
  ));

  it('타이틀이 보인다', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
