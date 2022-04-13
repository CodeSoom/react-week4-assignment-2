import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders restaurant', () => {
    const restaurantList = [
      {
        id: 1, name: '시카고피자', category: '양식', address: '이태원구',
      },
      {
        id: 2, name: '마녀식당', category: '한식', address: '서울시 강남구',
      },
    ];
    const { container } = render((
      <App
        restaurantList={restaurantList}
      />
    ));

    expect(container).toHaveTextContent('시카고피자 | 양식 | 이태원구');
    expect(container).toHaveTextContent('마녀식당 | 한식 | 서울시 강남구');
  });
});
