import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantLists from '../fixtures/restaurantLists';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({ restaurantLists }));

  function renderApp() {
    return render((<App />));
  }

  it('App이 렌더링된다.', () => {
    const { getByText } = renderApp();

    expect(getByText('Restaurants')).not.toBeNull();
    expect(getByText('등록')).not.toBeNull();
  });
});
