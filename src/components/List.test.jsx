import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import List from './List';

jest.mock('react-redux');
const data = {
  restaurants: [
    {
      id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
    },
    {
      id: 2, name: '시카고피자', category: '양식', address: '이태원동',
    },
    {
      id: 3, name: '키와미', category: '일식', address: '분당구 정자동',
    },
  ],
};

it('renders restaurants', () => {
  useSelector.mockImplementation((selector) => selector(data));
  const { container } = render(<List />);
  expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
  expect(container).toHaveTextContent('시카고피자 | 양식 | 이태원동');
  expect(container).toHaveTextContent('키와미 | 일식 | 분당구 정자동');
});
