import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 0,
      title: '맥도날드 | 양식 | 서울시 양천구',
    }],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurant lists', () => {
    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent('맥도날드 | 양식 | 서울시 양천구');
  });
});
