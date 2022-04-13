import { render } from '@testing-library/react';

describe('RestaurantList 컴포넌트', () => {
  it('testId가 restaurants-list 인 li 요소를 가지고 있다.', () => {
    const { queryByTestId } = render((<RestaurantList />));

    expect(queryByTestId('restaurants-list')).not.toBeNull();
  });
});
