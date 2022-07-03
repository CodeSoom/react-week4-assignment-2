import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1, title: '마녀주방', category: '한식', address: '잠실',
      },
      {
        id: 2, title: '김가네', category: '한식', address: '창신',
      },
    ],
  }));

  function renderList() {
    return render((
      <ListContainer />
    ));
  }

  it('리스트가 렌더링될 때 가게 목록이 보여집니다.', () => {
    const { container } = renderList();

    expect(container).toHaveTextContent(/마녀주방/);
    expect(container).toHaveTextContent(/김가네/);
  });
});
