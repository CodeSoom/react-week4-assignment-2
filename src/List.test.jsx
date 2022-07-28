import { render, screen } from '@testing-library/react';

import List from './List';

describe('List', () => {
  test('renders restaurant list', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        type: '한식',
        location: '서울시 강남구',
      },
      {
        id: 2,
        name: '시카고 피자',
        type: '양식',
        location: '이태원동',
      },
      {
        id: 3,
        name: '키와미',
        type: '일식',
        location: '분당구 정자동',
      },
    ];
    render(<List restaurants={restaurants} />);

    expect(screen.getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeNull();
    expect(screen.getByText('시카고 피자 | 양식 | 이태원동')).not.toBeNull();
    expect(screen.getByText('키와미 | 일식 | 분당구 정자동')).not.toBeNull();
  });
});
