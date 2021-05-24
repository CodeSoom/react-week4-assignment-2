import { render } from '@testing-library/react';
import List from './List';

const data = [
  {
    id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
  },
  // {
  //   id: 2, name: '시카고피자', category: '양식', address: '이태원동',
  // },
  // {
  //   id: 2, name: '키와미', category: '일식', address: '분당구 정자동',
  // },
];

it('renders restaurants', () => {
  const { container } = render(<List restaurants={data} />);
  expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
});
