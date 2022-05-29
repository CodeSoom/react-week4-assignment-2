import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('renders restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1, name: '마녀주방', category: '한식', address: '강남',
        },
        {
          id: 2, name: '시카고 피자', category: '양식', address: '이태원',
        },
      ],
    }));

    const { getByText } = render(<ListContainer />);

    expect(getByText('마녀주방')).toBeInTheDocument();
    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('강남')).toBeInTheDocument();
    expect(getByText('시카고 피자')).toBeInTheDocument();
    expect(getByText('양식')).toBeInTheDocument();
    expect(getByText('이태원')).toBeInTheDocument();
  });
});
