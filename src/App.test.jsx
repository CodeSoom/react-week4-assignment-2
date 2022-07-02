import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1, name: '마녀주방', category: '한식', address: '잠실',
      },
      {
        id: 2, name: '김가네', category: '한식', address: '창신',
      },
    ],
  }));

  it('App이 렌더링 될 때, 헤더가 보여집니다.', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
