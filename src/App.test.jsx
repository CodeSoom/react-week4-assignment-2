import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';
import { initialState } from './reducer';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(initialState));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderApp() {
    return render(<App />);
  }

  it('renders input placeholder', () => {
    const { queryByPlaceholderText } = renderApp();

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('renders button', () => {
    const { queryByText } = renderApp();

    expect(queryByText('등록')).not.toBeNull();
  });
});
