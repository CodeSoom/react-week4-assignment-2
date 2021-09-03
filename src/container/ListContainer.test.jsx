import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given2 from 'given2';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  given2('restaurants', () => []);

  useSelector.mockImplementation((selector) => selector({
    restaurants: given2.restaurants,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurant lists', () => {
    given2('restaurants', () => [{
      id: 0,
      title: '맥도날드 | 양식 | 서울시 양천구',
    }]);

    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent('맥도날드 | 양식 | 서울시 양천구');
  });
});
