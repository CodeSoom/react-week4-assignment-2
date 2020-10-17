import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const renderApp = () => render(<App />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '',
        category: '',
        address: '',
      },
      restaurants: [],
    }));

    jest.clearAllMocks();
  });

  it('should visible all component', () => {
    const { getByText, getByPlaceholderText } = renderApp();

    expect(getByText('Restaurants')).not.toBeNull();

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('장소')).not.toBeNull();

    expect(getByText('등록')).not.toBeNull();
  });
});
