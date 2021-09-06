import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { name: '마녀주방', category: '분식', address: '서울시 강남구' },
      { name: '시카고피자', category: '양식', address: '이태원동' },
    ],
  }));

  it('renders tasks of redux state', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/시카고피자/)).not.toBeNull();
  });
});
