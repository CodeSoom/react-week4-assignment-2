import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer 관련 테스트', () => {
  it('레스토랑 목록', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1,
          name: '마녀주방',
          category: '한식',
          address: '서울시 강남구',
        },
        {
          id: 2,
          name: '시카고피자',
          category: '양식',
          address: '이태원동',
        },
      ],
    }));

    const { getByText } = render(<ListContainer />);

    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByText(/시카고피자/)).not.toBeNull();
  });
});
