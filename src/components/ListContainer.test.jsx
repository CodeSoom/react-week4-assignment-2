import { render } from '@testing-library/react';

import { useSelector } from '../../__mocks__/react-redux';
import ListContainer from './ListContainer';

test('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
      },
      {
        id: 2, name: '시카고피자', category: '양식', address: '이태원동',
      },
    ],
  }));

  const { getByText } = render(<ListContainer />);

  expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeUndefined();
  expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeUndefined();
});
