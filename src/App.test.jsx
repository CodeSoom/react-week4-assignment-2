import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    shopName: '',
    shopType: '',
    shopAddress: '',
    restaurants: [
      {
        id: 1, name: '마녀주방', type: '한식', address: '서울시 강남구',
      },
    ],
  }));

  it('renders ', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/등록/)).not.toBeNull();
    expect(getByText(/마녀주방/)).not.toBeNull();
  });
});
