import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import ListContainer from '../src/ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1,
      name: '마녀주방',
      category: '한식',
      address: '경기도',
    }],
  }));

  const renderComponent = () => render(<ListContainer />);
  it('ListContainer 가 렌더링 된다.', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('식당 목록이 있다면, 식당 목록이 화면에 뿌려진다.', () => {
    const { getAllByRole } = renderComponent();

    expect(getAllByRole('listitem')).toHaveLength(1);
  });
});
