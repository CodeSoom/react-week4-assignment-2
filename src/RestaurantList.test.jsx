import { render } from '@testing-library/react';
import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  it('renders a list of restaurants', () => {
    const state = [{
      id: 1,
      name: '마녀주방',
      address: '한식',
      category: '서울시 강남구',
    }, {
      id: 2,
      name: '시카고피자',
      address: '양식',
      category: '이태원동',
    }, {
      id: 3,
      name: '키와미',
      address: '일식',
      category: '분당구 정자동',
    }];
    const { getByRole } = render(<RestaurantList restaurants={state} />);
    const element = getByRole('list');

    expect(element).toHaveTextContent(/마녀주방 | 한식 | 서울시 강남구/i);
    expect(element).toHaveTextContent(/시카고피자 | 양식 | 이태원동/i);
    expect(element).toHaveTextContent(/키와미 | 일식 | 분당구 정자동/i);
  });
});
