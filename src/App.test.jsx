import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantList from '../fixtures/restaurantList';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({ restaurantList }));

  function renderApp() {
    return render((<App />));
  }

  it('App이 렌더링된다.', () => {
    const { getByText } = renderApp();

    expect(getByText('Restaurants')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });
});
