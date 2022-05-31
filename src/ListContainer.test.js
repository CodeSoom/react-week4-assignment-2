import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('renders restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('강남');
    expect(container).toHaveTextContent('시카고 피자');
    expect(container).toHaveTextContent('양식');
    expect(container).toHaveTextContent('이태원');
  });
});
