import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import { restaurants } from './fixtures/restaurant';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { name, type, adress } = restaurants[0];

  const renderApp = () => render((
    <App />

  ));

  it('title을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('등록 버튼을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(/등록/)).not.toBeNull();
  });

  it('restaurantName을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(name)).not.toBeNull();
  });

  it('restaurantType을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(type)).not.toBeNull();
  });

  it('restaurantAdress을 렌더링한다', () => {
    const { getByText } = renderApp();

    expect(getByText(adress)).not.toBeNull();
  });
});
