import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import { restaurants } from './fixtures/restaurant-dummy';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    Restaurants: restaurants,
  }));

  const renderApp = () => render((
    <App />
  ));

  it('title을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('input-button을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/등록/)).not.toBeNull();
  });

  it('restaurants-restaurantName을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/한식 뷔페/)).not.toBeNull();
  });

  it('restaurants-restaurantType을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/한식/)).not.toBeNull();
  });

  it('restaurants-restaurantAdress을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/서울특별시 신림동/)).not.toBeNull();
  });
});
