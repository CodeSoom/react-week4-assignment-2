import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';

describe('ListContainer', () => {
  jest.mock('react-redux');
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 100,
      title: '삼겹살',
      sort: '고기',
      location: '강남',
    }],
  }));

  it('리스트들이 보인다', () => {
    const renderListContainer = () => render(<ListContainer />);
    const { getByText } = renderListContainer();

    expect(getByText('삼겹살')).not.toBeNull();
    expect(getByText('고기')).not.toBeNull();
    expect(getByText('강남')).not.toBeNull();
  });
});
